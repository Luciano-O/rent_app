import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { StatusCodes } from 'http-status-codes';
import { newRent, products, token } from './Mocks';
import { app } from '../app';
import Rents from '../database/models/rents'

chai.use(chaiHttp);

const { expect } = chai;

describe('Testes da rota /rents', () => {
  describe("Realiza o registro de uma nova compra", () => {
    before(async () => {
      sinon
        .stub(Rents, "create")
        .resolves()
    })

    after(() => {
      (Rents.create as sinon.SinonStub).restore();
    })

    it("Retorna o status correto", async () => {
      const { status } = await chai.request(app)
        .post('/rent')
        .send(newRent)
        .set('Authorization', `Bearer ${token}`)

      expect(status).to.be.equal(StatusCodes.CREATED)
    })
  })
})