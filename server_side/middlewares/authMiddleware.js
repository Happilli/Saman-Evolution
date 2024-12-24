import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

// Protected route
export const requireSignIn = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return res.status(401).send({
        success: false,
        message: "Authorization header is missing",
      });
    }
    const decoded = JWT.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    req.user = decoded;
    next();
  } catch (error) {
    if (error.name === "JsonWebTokenError") {
      return res.status(401).send({
        success: false,
        message: "Invalid or malformed token",
      });
    }
    if (error.name === "TokenExpiredError") {
      return res.status(401).send({
        success: false,
        message: "Token has expired",
      });
    }
    return res.status(400).send({
      success: false,
      message: "Authorization required",
    });
  }
};

//isadmin
export const isAdmin = async (req, res, next) => {
  try {
    if (!req.user || !req.user._id) {
      return res.status(400).send({
        success: false,
        message: "User information not found, authorization required",
      });
    }
    const user = await userModel.findById(req.user._id);
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }

    // Check if the user has admin privileges (role 1 represents admin)
    if (user.role !== 1) {
      return res.status(403).send({
        success: false,
        message: "You are not authorized to access this route",
      });
    }
    next();
  } catch (error) {
    console.error("Error in isAdmin middleware:", error);
    return res.status(500).send({
      success: false,
      message: "Server error, please try again later",
    });
  }
};
