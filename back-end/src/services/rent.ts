import Rents from "../database/models/rents";

class RentsServices {
  static async create(rent: Rents) {
    return await Rents.create(rent)
  }
}

export default RentsServices