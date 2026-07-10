import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).send("Access denied");
  }

  try {
    const decoded = jwt.verify(token, "mysecretkey");
    req.userId = decoded.userId;
    next();
  } catch (err) {
    return res.status(401).send("Invalid token");
  }
};

export default verifyToken;