
import express from "express";
import "dotenv/config";
import cors from "cors";
import { GoogleGenAI } from "@google/genai";
import mongoose from "mongoose";
import chatRoutes from "./routes/chat.js";
import bcrypt from "bcryptjs";
import User from "./models/User.js";
import jwt from "jsonwebtoken";
import resumeRoutes from "./routes/resume.js";
import companyPrepRoutes from "./routes/companyPrep.js";
import placementRoutes from "./routes/placement.js";


const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.json());
app.use(cors());

app.use("/api",chatRoutes);
app.use("/api", companyPrepRoutes);
app.use("/api", placementRoutes);


app.use("/api", resumeRoutes);


app.get("/", (req, res) => {
  res.send("IntelliGuide AI Backend is running ");
});

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
  connectDB();
});

const connectDB= async()=>{
  try{
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("connected with db");
  }catch(err){
    console.log("failed ",err);
  }
}



app.post("/api/signup", async (req, res) => {

  const { email, password } = req.body;

  try {

    
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        error: "User already exists"
      });
    }

    
    const hashedPassword = await bcrypt.hash(password, 10);

    
    const user = new User({
      email,
      password: hashedPassword
    });

    await user.save();

    res.json({
      success: "User created successfully"
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      error: "Something went wrong"
    });

  }

});
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return  res.status(400).json({
  error: "User not found"
});

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({
  error: "Wrong password"
});

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({ token });

  } catch (err) {
    console.log(err);
    res.status(500).send("Error");
  }
});
