import {
  Model, INTEGER,
} from 'sequelize';
import db from '.';

class Rents extends Model {
  userId!: number;

  productId!: number;

  months!: number;
}

Rents.init({
  userId: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    field: "user_id",
    references: {
      model: 'Users',
      key: 'id',
    },
  },
  productId: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    field: "product_id",
    references: {
      model: 'products',
      key: 'id',
    },
  },
  months: {
    type: INTEGER,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'Rents',
  timestamps: false,
});

export default Rents;
