import jwt from "jsonwebtoken";

const authenticationMiddleware = async (req,res,next) => {
    console.log(req.headers.authorization)
    next()
}

export default authenticationMiddleware