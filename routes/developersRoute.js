import express from "express"
import DevelopersController from "../controllers/developersController.js"

const developersRouter = express.Router()

//_____/about/
router.route("/about").get(DevelopersController.apiGetAbout)

export default developersRouter