const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const conversationRoute = require("./routes/conversation");
const messageRoute = require("./routes/message");

dotenv.config();

// const connect = async () => {
//   try {
//     mongoose.connect(process.env.MONGODB_URI);
//     console.log("Connected to mongoDB");
//   } catch (err) {
//     console.log(err);
//   }
// };

const port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI, (e) => {
  if (e) {
    console.log(e);
  } else {
    console.log("Connected to database");
  }
});

//midlewares;
app.use(express.json());
app.use(morgan("common"));

app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/posts", postRoute);
app.use("/conversations", conversationRoute);
app.use("/message", messageRoute);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
