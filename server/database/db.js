import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const Connection = async () => {
    const username = process.env.MONGO_USERNAME;
    const password = process.env.MONGO_PASSWORD;
    const URL = `mongodb+srv://deepakgulia0809:deepakgulia0809@chartproject.2gz94k0.mongodb.net/?retryWrites=true&w=majority&appName=ChartProject`;

    try {
        await mongoose.connect(URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with database', error);
    }
};

Connection(); // Call the connection function

export default Connection;
