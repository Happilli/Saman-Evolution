import dotenv from "dotenv";
import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import JWT from "jsonwebtoken";
import nodemailer from "nodemailer";
import crypto from "crypto";

dotenv.config();

const SMTP_USERNAME = process.env.MAIL_USERNAME;
const SMTP_PASSWORD = process.env.MAIL_PASSWORD;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: SMTP_USERNAME,
    pass: SMTP_PASSWORD,
  },
});

//register controller
export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;
    if (!name || !email || !password || !phone || !address) {
      return res
        .status(400)
        .send({ success: false, message: "All fields are required" });
    }

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .send({ success: false, message: "User already registered" });
    }

    const hashedPassword = await hashPassword(password);
    const otp = crypto.randomInt(100000, 999999).toString();

    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
      phone,
      address,
      isVerified: false,
      otp,
    });
    await newUser.save();

    await transporter.sendMail({
      from: `"${name}" <${SMTP_USERNAME}>`,
      to: email,
      subject: "Verify Your Account",
      text: `Your OTP for account verification is: ${otp}`,
    });

    return res
      .status(201)
      .send({
        success: true,
        message: "Registration successful. Check your email for OTP.",
      });
  } catch (error) {
    res
      .status(500)
      .send({
        success: false,
        message: "An error occurred",
        error: error.message || error,
      });
  }
};

//verifying user
export const verifyUserController = async (req, res) => {
  try {
    const { email, otp } = req.body;
    if (!email || !otp) {
      return res
        .status(400)
        .send({ success: false, message: "Email and OTP are required" });
    }

    const user = await userModel.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .send({ success: false, message: "User not found" });
    }

    if (user.otp !== otp) {
      return res.status(400).send({ success: false, message: "Invalid OTP" });
    }

    user.isVerified = true;
    user.otp = null;
    await user.save();

    return res
      .status(200)
      .send({ success: true, message: "User verified successfully" });
  } catch (error) {
    res
      .status(500)
      .send({
        success: false,
        message: "An error occurred",
        error: error.message || error,
      });
  }
};

//login controller
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .send({ success: false, message: "Invalid email or password" });
    }

    const user = await userModel.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .send({ success: false, message: "User not found" });
    }

    if (!user.isVerified) {
      return res
        .status(400)
        .send({ success: false, message: "Account not verified" });
    }

    const match = await comparePassword(password, user.password);
    if (!match) {
      return res
        .status(400)
        .send({ success: false, message: "Invalid password" });
    }

    const token = await JWT.sign({ _id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    return res.status(200).send({
      success: true,
      message: "User logged in successfully",
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
      },
      token,
    });
  } catch (error) {
    res
      .status(500)
      .send({
        success: false,
        message: "An error occurred",
        error: error.message || error,
      });
  }
};

//test controller
export const testController = (req, res) => {
  res.send("protected route");
};
