import express from "express";
const app = express();
import dotenv from "dotenv";

dotenv.config();

app.use(express.json());

app.get("/api", (req, res) => {
  res.json({
    message: "Welcome to the API",
  });
});

const start = async () => {
  try {
    app.listen(3000, () =>
      console.log(`Server is running on http://localhost:3000`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();