import mongoose from "mongoose";

export const ConnectDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "work_Manager"  // Correct option name
    });
    console.log("==============================================================");
    console.log("Connection successful to database:", connection.name);
    console.log("Host:", connection.host);
  } catch (error) {
    console.error("Database connection error:", error);

  }
};