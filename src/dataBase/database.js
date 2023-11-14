import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const mongoDbURI = process.env.MONGODB_URI;

export async function initializeDatabase() {

    try {
        if (mongoose.connection.readyState === 0) {

            await mongoose.connect(mongoDbURI, { dbName: 'Charts' });

            console.log('MongoDB connected');
        }
    } catch (error) {
         
        console.error('MongoDB connection error:', error);
    }
}
