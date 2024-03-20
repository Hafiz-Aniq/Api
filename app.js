require("dotenv").config()

const express = require("express");
const app = express();
const connectDB = require("./db/database")

const PORT = process.env.PORT || 5000;

const quiz_route = require("./routes/quizes");

app.get("/", (req, res) => {
  res.send("Chup kar");
});



app.use("/api/quizes", quiz_route);

const start = async () => {
  try {
    await connectDB(process.env.mongoose_URL);
    
    app.listen(PORT, () => {
      console.log(`${PORT} Yes I'm connected`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
