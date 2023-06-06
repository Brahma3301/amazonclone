//imports from packages
const express = require("express");
const mongoose = require("mongoose");

//imports from other files
const authrouter = require("./routes/auth");
//init
const PORT = 3000;
const app = express();
const DB =
  "mongodb+srv://vagun:vagun123@cluster0.3qfjgti.mongodb.net/?retryWrites=true&w=majority";

//middleware
app.use(express.json());
app.use(authrouter);

//connections
mongoose
  .connect(DB)
  .then(() => {
    console.log("connection successful");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(PORT, "0.0.0.0", () => {
  console.log(`CONNECTED AT PORT ${PORT} `);
});
