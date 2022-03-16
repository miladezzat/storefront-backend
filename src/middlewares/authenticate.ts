import express from "express";
import jwt from "jsonwebtoken";

const authenticate = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const authorizationHeader = req.headers.authorization;
    const token = String(authorizationHeader);
    
    jwt.verify(token, String(process.env.TOKEN_SECRET));

    next();
  } catch (err) {    
    return res.status(401).send("Access denied, invalid token");
  }
};

export default authenticate;
