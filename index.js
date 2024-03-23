import app from "./server.js";
import mongoose from "mongoose";

//import ReviewsDAO from "./dao/reviewsDAO.js";
/*
 * DAO stands for data access object
 * This is a common pattern for writing programs that
 * work with databases. So the data access object pattern
 * seperates a data resources client interface
 * from its' data access mechanisms.
 */

// const MongoClient = mongodb.MongoClient;

const mongo_username = process.env["MONGO_USERNAME"];
const mongo_password = process.env["MONGO_PASSWORD"];
const uri = `mongodb+srv://${mongo_username}:${mongo_password}@cluster0.fu6l9sk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const port = 8000;

// MongoClient.connect(uri, {
//   maxPoolSize: 50,
//   wtimeoutMS: 2500,
//   useNewUrlParser: true,
// })
//   .catch((err) => {
//     console.error(err.stack);
//     process.exit(1);
//   })
//   .then(async (client) => {
//     app.listen(port, () => {
//       console.log(`listening on port ${port}`);
//     });
//   });

mongoose.connect(
  uri,
  async () => {
    app.listen(port, () => console.log(`Listening on port ${port}`));
  },
  (error) => console.error("MongoDB connection error: ", error),
);
