import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { StatusCodes } from 'http-status-codes';
import { products } from './Mocks';
import { app } from '../app';
import Rents from '../database/models/rents'

chai.use(chaiHttp);

const { expect } = chai;

describe('Testes da rota /rents', () => {
  describe("Realiza o registro de uma nova compra")
})