import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbConnection = async () => {
    try {
        const dbURI = process.env.MONGODB_URI;
        const dbName = process.env.MONGODB_DB;

        await mongoose.connect(`${dbURI}/${dbName}`, {
        });

        console.log(`Database connected successfully to ${dbName}`);

    }catch (error) {
        console.log(error);
        process.exit(1); // Exit process with failure
    }
};
export default dbConnection;