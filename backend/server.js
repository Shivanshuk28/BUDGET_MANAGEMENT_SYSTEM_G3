// server.js
import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';

const app = express();
const PORT = 5000;

// MongoDB connection
await mongoose.connect('mongodb+srv://shivambajpai04:o3mTZzubx4o9ry9X@cluster0.6civnyd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>{console.log("B=db connected")}).catch((err)=>{console.log(err)});



app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

app.use('/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
