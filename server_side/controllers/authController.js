import userModel from "../models/userModel.js";
import { hashPassword } from "../helpers/authHelper.js";

export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;

    // Validation for required fields
    if (!name) {
      return res.status(400).send({
        success: false,
        message: "Name is required",
      });
    }

    if (!email) {
      return res.status(400).send({
        success: false,
        message: "Email is required",
      });
    }

    if (!password) {
      return res.status(400).send({
        success: false,
        message: "Password is required",
      });
    }

    if (!phone) {
      return res.status(400).send({
        success: false,
        message: "Phone number is required",
      });
    }

    if (!address) {
      return res.status(400).send({
        success: false,
        message: "Address is required",
      });
    }

    // Check if user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).send({
        success: false,
        message: "User already registered, please login",
      });
    }

    // Hash the password
    const hashedPassword = await hashPassword(password);

    // Create and save the new user
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
      phone,
      address,
    });

    const savedUser = await newUser.save();

    return res.status(201).send({
      success: true,
      message: "User registered successfully",
      user: savedUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "An error occurred while registering the user",
      error: error.message || error,
    });
  }
};
