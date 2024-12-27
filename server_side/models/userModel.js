import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    role: {
      type: Number,
      default: 0, 
    },
    pfp: {
      data: { type: Buffer, default: null },
      contentType: { type: String, default: null },
    },
    isVerified: {
      type: Boolean,
      default: false, 
    },
    otp: {
      type: String,
      default: null, 
    },
    otpExpiresAt: {
      type: Date,
      default: null, 
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
