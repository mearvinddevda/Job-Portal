import mongoose from 'mongoose'

const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("DataBase Connected")
        
    } catch (error) {
        console.log("arvind we have an error");
        console.log(error);
    }
}

export default connectDB;