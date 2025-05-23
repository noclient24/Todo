import mongoose, { Schema } from "mongoose"


const userschema=new Schema({

    name:String,
    email:{
        unique:true,
        type:String,
        required:[true,"Email required !"]
    },
    password:{
        type:String,
        required:[true,"Password required"]
    },
    about:String,
    ProfileURL:String

})


export const UserData=mongoose.models.User||mongoose.model("UserData",userschema)