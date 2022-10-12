import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { StatusCodes } from 'http-status-codes';
import { basicUser, newUser, notUserLogin, userPayload, validLogin } from './Mocks';
import { app } from '../app';
import Users from '../database/models/usersModel';

chai.use(chaiHttp);

const { expect } = chai;

describe("Testes da rota /users", () => {
  describe("Retorna o usuario com base no seu id", () => {
    before(async () => {
      sinon
        .stub(Users, "findByPk")
        .resolves(userPayload as any)
    })

    after(() => {
      (Users.findByPk as sinon.SinonStub).restore();
    })

    it('Status e body estão corretos', async () => {
      const { status, body } = await chai.request(app)
        .get('/users/1')

      expect(status).to.be.equal(StatusCodes.OK);
      expect(body).to.be.an('object');
    })
  })

  describe("Cria um novo usuario", () => {
    before(async () => {
      sinon
        .stub(Users, "create")
        .resolves({ id: 3 } as any)
    })

    after(() => {
      (Users.create as sinon.SinonStub).restore();
    })

    it('Quando dados corretos são inseridos', async () => {
      const { status, body } = await chai.request(app)
        .post('/users')
        .send(newUser)

      expect(status).to.be.equal(StatusCodes.CREATED)
      expect(body).to.be.an('object')
      expect(body.token).to.be.an('string')
    })

    it('Quando o email é inserido incorretamente', async () => {
      const { status, body } = await chai.request(app)
        .post('/users')
        .send({...newUser, email: "xablau"})

      expect(status).to.be.equal(StatusCodes.BAD_REQUEST)
      expect(body).to.be.an('object')
      expect(body.message).to.be.equal('"email" must be a valid email')
    })
  })

  describe('Executa o login', () => {
    before(async () => {
      sinon
        .stub(Users, "findOne")
        .resolves(basicUser as Users)
    })

    after(() => {
      (Users.findOne as sinon.SinonStub).restore();
    })

    it('Dados corretos são inseridos', async () => {
      const { status, body } = await chai.request(app)
        .post('/login')
        .send(validLogin)
      
      expect(status).to.be.equal(StatusCodes.OK)
      expect(body).to.be.an('object')
      expect(body.token).to.be.an('string')
    })  

    it('Email inserido não pertence à nenhum usuario', async () => {
      (Users.findOne as sinon.SinonStub).restore();

      sinon
        .stub(Users, "findOne")
        .resolves()

      const { status, body } = await chai.request(app)
        .post('/login')
        .send(notUserLogin)

      expect(status).to.be.equal(StatusCodes.NOT_FOUND);
      expect(body).to.contain({message: "User don't exists"})
    })

    it('Email inválido é inserido', async () => {
      const { status, body } = await chai.request(app)
        .post('/login')
        .send({...validLogin, email: "oliveiragmailcom"})

      expect(status).to.be.equal(StatusCodes.BAD_REQUEST);
      expect(body).to.be.an('object');
      expect(body).to.contain({message: '"email" must be a valid email'});
    })
  })
})