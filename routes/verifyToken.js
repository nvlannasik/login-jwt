const jwt = require("jsonwebtoken");
require("dotenv");

const authenticateJWT = (req, res, next) => {
  //get token from header
  const token = req.header("x-auth-token");

  if (!token) return res.status(401).send("Access denied. No token provided.");

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
  } catch (err) {
    res.status(400).send("Invalid token.");
  }
  return next();
};

// const authenticateJWT = (req, res, next) => {
//   if (req.headers["Authorization"]) {
//     try {
//       let authorization = req.headers["Authorization"].split(" ");
//       if (authorization[0] !== "undefined") {
//         return res.status(401).send("invalid request"); //invalid request
//       } else {
//         req.jwt = jwt.verify(authorization[1], process.env.TOKEN_SECRET);
//         return next();
//       }
//     } catch (err) {
//       return res.status(403).send("Invalid Token"); //invalid token
//     }
//   } else {
//     return res.status(401).send("invalid request");
//   }
// };

// const authenticateJWT = (req, res, next) => {
//   let token = req.header("Authorization");
//   if (!token) return res.status(401).send("Access denied. No token provided.");
//   try {
//     const verified = jwt.verify(token, process.env.TOKEN_SECRET);
//     req.user = verified;
//     next();
//   } catch (err) {
//     res.status(400).send("Invalid token.");
//   }
// };

// const authenticateJWT = (req, res, next) => {
//   const authHeader =
//     req.headers["Authorization"] || req.headers.authorization || req.body.token;
//   if (authHeader) {
//     const token = authHeader.split(" ")[1];
//     const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
//     req.user = decoded;
//     next();
//   } else {
//     res.status(401).send("Access denied. No token provided.");
//   }
// };

module.exports = authenticateJWT;
