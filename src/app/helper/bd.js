import mongoose  from "mongoose";



export const  ConnetDB=async()=>{
try {

    
    const {coonection}=await mongoose.connect(process.env.MONGODB_URL,{
        bd_Name:"work_Manager"
    })
    console.log("==============================================================")
    console.log("Connection successfully",coonection)
} catch (error) {
    console.log(error)
}
}