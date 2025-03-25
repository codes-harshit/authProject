import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized",
    });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({
        success: false,
        message: "Invalid Token",
      });
    }
    req.userId = decoded.id;
    next();
  } catch (error) {
    console.log("Error in verify token middleware", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error in verifying token",
    });
  }
};
