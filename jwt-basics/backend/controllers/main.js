/* import CustomAPIError from "../errors/custom-error.js"; */
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  if (!username || !password) {
    return res.status(400).json({ msg: `Please provide email and password` });
    /* throw new CustomAPIError("Please provide email and password", 400) */
  }

  const id = new Date().getDate();
  const token = jwt.sign({id, username}, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  res.status(200).json({ msg: `User created`, token });
};

export const dashboard = async (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ msg: `You are not authorized` });
  }
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const luckyNumber = Math.floor(Math.random() * 100);
    res.status(200).json({
      msg: `Hello, ${decoded.username}`,
      secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
    });
    console.log(decoded);
  } catch (error) {
    return res.status(401).json({ msg: `You are not authorized` });
  }
  console.log(token)
};
