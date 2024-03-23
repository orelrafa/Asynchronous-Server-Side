//this file is all about getting information that was sent to the route and sending it to the costsDAO
import CostsDAO from "../dao/costsDAO.js"

// The automatic test will try to add a new cost item by sending (with the POST method) the following parameters:
// user_id, year, month, day, description, category, and sum. The category will be one of the available ones, according to this document.

export default class CostsController{
  static async apiPostCosts(req, res, next){
    try{
      const user_id = req.body.user_id;
      const description = req.body.description;
      const category = req.body.category;
      const sum = req.body.sum;

      if(!user_id || !description || !category || !sum){
        return res.status(400).json({error: "Bad Request: Missing required parameters"});
      }

      // If year, month, and day are not provided by the user in the url, will use the current date
      const currentDate = new Date();
      const year = req.body.year || currentDate.getFullYear();
      const month = req.body.month || currentDate.getMonth() + 1;
      const day = req.body.day || currentDate.getDate();
      
      const costsResponse = await CostsDAO.addcost(
        user_id,
        year,
        month,
        day,
        description, 
        category, 
        sum
      );
      res.json({status: "success"})
    }catch(error){
      res.status(500).json({error: error.message});
    }
  }
  static async apiGetReport(req, res, next){
    // The parameters should be year, month and user_id.
    try{
      
    }catch(error){
      res.status(500).json({error: error})
    }
  }
}