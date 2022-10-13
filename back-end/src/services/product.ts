import Products from '../database/models/productsModel'

class ProductsService {
  static async getAll() {
    const products = await Products.findAll()

    return products
  }

  static async getById(id: number) {
    const product = await Products.findByPk(id)

    return product
  }
}

export default ProductsService;
