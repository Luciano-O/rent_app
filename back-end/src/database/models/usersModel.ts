import {
  Model, INTEGER, STRING,
} from 'sequelize';
import db from '.';

class Users extends Model {
  id!: number;

  name!: string;

  email!: string;

  password!: string;
}

Users.init({
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
  email: {
    type: STRING(30),
    unique: true,
    allowNull: false,
  },
  password: {
    type: STRING(1000),
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'users',
  timestamps: false,
});

export default Users;
