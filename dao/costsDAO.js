import Cost from "../models/costsModel.js";
import User from "../models/usersModel.js";

export default class CostsDAO {
  // Adding a new costs report for specific user if the user id exists in the database
  static async addcost(user_id, year, month, day, description, category, sum) {
    try {
      // Check if the user exists
      const user = await User.findOne({ id: user_id }, null, null);
      if (!user) {
        return { error: "User not found" };
      }

      const newCost = new Cost({
        user_id,
        year,
        month,
        day,
        description,
        category,
        sum,
      });
      await newCost.save();

      return { status: "success" };
    } catch (error) {
      console.error(`Unable to add cost: ${error}`);
      return { error: e.message };
    }
  }
}
