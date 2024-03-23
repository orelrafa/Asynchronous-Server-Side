import express from "express"
import CostsController from "../controllers/costsController.js"

const costsRouter = express.Router()

//_____/addcost/
router.route("/addcost").post(CostsController.apiPostCosts);
//_____/report/
router.route("/report").get(CostsController.apiGetReport)

export default costsRouter