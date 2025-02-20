import jwt from "jsonwebtoken";
import { UnauthenticatedError } from "../errors";

const authenticationMiddleware = async (req, res, next) => {
  console.log(req.headers.authorization);
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ msg: `You are not authorized` });
  }
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id, username } = decoded;
    req.user = { id, username };
    next();
    console.log(decoded);
  } catch (error) {
    return res.status(401).json({ msg: `You are not authorized` });
  }
};

export default authenticationMiddleware;
