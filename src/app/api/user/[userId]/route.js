import { NextResponse } from "next/server"

export const DELETE=(request,{params})=>{
 
    const {userId}=params
    console.log("This is a Nested Route [user_Id]")
    console.log("This is a userId",userId)
    return NextResponse.json({
         message:"Your Has been Delete please Wait Some Time",

    },{status:200})
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   