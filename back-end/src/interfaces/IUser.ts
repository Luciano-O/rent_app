import Users from "../database/models/usersModel";
import IProduct from "./IProduct";

export default interface IUser extends Users {
  products: IProduct[]
}