import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connection_url = "mongodb+srv://dasshibsankar94732_db_user:QZ0bXRr1X0DUdi3p@cluster0.jiwldca.mongodb.net/foodDeliveryDB";
export const connectDb = async () => {
    mongoose.connect(connection_url).then(() => {
    console.log("DB connected");
})
}

//dasshibsankar94732_db_user
//QZ0bXRr1X0DUdi3p