import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const mongoURI = process.env.MONGO_URI;
        
        if (!mongoURI) {
            throw new Error('MONGO_URI is not defined in environment variables');
        }
        
        await mongoose.connect(mongoURI);
        console.log('DB CONNECTED');
    } catch (error) {
        console.error('Database connection error:', error.message);
        process.exit(1);
    }
}