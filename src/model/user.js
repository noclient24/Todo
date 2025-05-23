import mongoose, { Schema } from "mongoose"

const userschema=new Schema({

    name:String,
    email:{
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


export const User=mongoose.models.User||mongoose.model("User",userschema)