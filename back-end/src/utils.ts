import IProduct from "./interfaces/IProduct"
import {sign, Secret, SignOptions } from 'jsonwebtoken';

export const formatProducts = (products: IProduct[]) => {
  const final = products.map((item) => ({
    id: item.id,
    name: item.name,
    image: item.image,
    price: item.price,
    months: item.Rents.months
  }))

  return final
}

export const generateJWT = (id: number, email: string, name: string) => {
  const jwtConfig: SignOptions = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const secret: Secret = process.env.JWT_SECRET || 'pselAllugator';

  const token = sign({ data: { id, email, name}}, secret, jwtConfig)

  return token
}