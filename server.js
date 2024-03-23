import express from "express";
import cors from "cors";
import costsRouter from "./routes/costsRoute.js";
import usersRouter from "./routes/usersRoute.js";
import developersRouter from "./routes/developersRoute.js";


const app = express();
app.use(cors());
//Will allow us to accept json in the body of the request so if someone sends a GET request to our server, 
//it will be able to read the body of the request.
app.use(express.json()); 

//let's specify some of the initial routes
//Initial routes are basically the url that you access
//to send a receive information
app.use("/", costsRouter);
app.use("/", usersRouter);
app.use("/", developersRouter);
app.use("*", (req, res) => {
  res.status(404).json({ error: "not found" });
});

export default app