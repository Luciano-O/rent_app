import Products from '../database/models/productsModel'

class ProductsService {
  static async getAll() {
    const products = await Products.findAll()

    return products
  }
}

export default ProductsService;
