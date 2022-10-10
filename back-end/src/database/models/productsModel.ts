import {
  Model, INTEGER, STRING, DOUBLE
} from 'sequelize';
import db from '.';

class Products extends Model {
  id!: number;

  name!: string;

  image!: string;

  price!: string;
}

Products.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: STRING(30),
    allowNull: false,
  },
  image: {
    type: STRING(200),
    allowNull: false,
  },
  price: {
    type: DOUBLE,
    allowNull: false,
  },
  description: {
    type: STRING(4000),  
  }
}, {
  sequelize: db,
  modelName: 'products',
  timestamps: false,
});

export default Products;
