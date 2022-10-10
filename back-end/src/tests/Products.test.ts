import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { StatusCodes } from 'http-status-codes';
import { products } from './Mocks';
import { app } from '../app';
import Products from '../database/models/productsModel'

chai.use(chaiHttp);

const { expect } = chai;

describe("Testes da rota /products", () => {
  describe("Retorna corretamente todos os produtos",() => {
    before(async () => {
      sinon
        .stub(Products, "findAll")
        .resolves(products as any)
    })

    after(() => {
      (Products.findAll as sinon.SinonStub).restore();
    })

    it('Status e body estão incorretos', async () => {
      const { status, body } = await chai.request(app)
        .get('/products')

      expect(status).to.be.equal(StatusCodes.OK)
      expect(body).to.be.an('array');
      expect(body.length).to.be.equal(2)
    })
  })
})