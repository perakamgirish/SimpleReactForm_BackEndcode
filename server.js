const express = require("express");
const cors = require("cors");
const app = express();
const dotEnv = require("dotenv");
dotEnv.config();
const Port = process.env.Port || 2000;
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");

// app.get("/", (req, res) => {
//   res.send("im from the home page");
// });
app.use(cors());

app.use(express.json());

mongoose
  .connect(process.env.Mongo_URL)
  .then(() => {
    console.log("MONGODB Connected Successfully");
  })
  .catch((error) => {
    console.log(`${error}`);
  });

app.use("/api", userRoutes);

app.listen(Port, () => {
  console.log(`Server Started and Running successfully on Port ${Port}`);
});
//"mongodb+srv://pgirishgiri123:2wEnJmMHK0Kv4fin@backenddb.fn62npu.mongodb.net/Users&appName=BackEndDB"
