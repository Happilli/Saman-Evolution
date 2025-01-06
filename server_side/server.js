import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";  // Import cors package
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";

// configure .env
dotenv.config();

// database config
connectDB();

// rest obj
const app = express();

// middlewares
app.use(cors()); 
app.use(morgan("dev"));
app.use(express.json());


// myroutes
app.use("/api/v1/auth", authRoutes);

// rest api
app.get("/", (req, res) => {
  res.send("<h1>hello world</h1>");
});

// port
const PORT = process.env.PORT;

// run listen
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`.bgMagenta.white);
});
