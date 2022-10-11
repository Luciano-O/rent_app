export default interface IProduct {
  id: number,
  name: string,
  image: string,
  price: string,
  months?: number,
  Rents: {
    months: number
  }
}