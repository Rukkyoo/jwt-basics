import express from "express";
const app = express();
import dotenv from "dotenv";
/* import asyncHandler from "express-async-errors"; */
import mainRouter from "./routes/main.js";

dotenv.config();


app.use(express.json());
app.use("/api/v1", mainRouter)

app.get("/api", (req, res) => {
  res.json({
    message: "Welcome to the API",
  });
});

// middleware


const start = async () => {
  try {
    app.listen(3000, () =>
      console.log(`Server is running on port 3000`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();