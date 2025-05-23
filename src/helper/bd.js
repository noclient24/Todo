import mongoose from "mongoose";
import {User} from "@/model/user"
export const ConnectDB = async () => {
  try {
     const connectionString =process.env.MONGODB_URL
      if (!connectionString) {
        throw new Error("MONGODB_URL environment variable is not defined");
      }
  
      const connection = await mongoose.connect(connectionString, {
        dbName: "work_Manager",
      });
  
      
      const userPOst=new User({
        name:"abdullah",
        email:"abdullah@gmail.com",
        password:"abdullah",
        about:"this is a about"
      })

      await userPOst.save()
      console.log("user Has created")
      console.log("==============================================================");
      console.log("Connection successful to database");


  } catch (error) {
    console.error("Database connection error:", error.message);
    throw error;
  }
};