import IProduct from "./interfaces/IProduct"

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