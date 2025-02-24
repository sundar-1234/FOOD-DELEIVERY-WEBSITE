import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://shanmuga_sundaram:Sundaryuvan123@cluster0.fmimu.mongodb.net/Craving-Zone').then(()=>console.log("DB connected"));
}