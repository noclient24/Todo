import { ConnectDB } from "@/app/helper/bd";
import { NextResponse } from "next/server";

export const GET=async()=>{
    await ConnectDB()
    const students = [
        { name: "Ayesha Khan", phone: "0301-1234567", course: "JavaScript" },
        { name: "Bilal Ahmed", phone: "0302-2345678", course: "Java" },
        { name: "Fatima Noor", phone: "0303-3456789", course: "Python" },
        { name: "Usman Raza", phone: "0304-4567890", course: "C++" },
        { name: "Zainab Ali", phone: "0305-5678901", course: "React" },
        { name: "Hamza Iqbal", phone: "0306-6789012", course: "Node.js" },
        { name: "Rabia Suleman", phone: "0307-7890123", course: "JavaScript" },
        { name: "Saad Farooq", phone: "0308-8901234", course: "TypeScript" },
        { name: "Hina Tariq", phone: "0309-9012345", course: "Angular" },
        { name: "Ali Nawaz", phone: "0310-0123456", course: "PHP" }
      ];
  return NextResponse.json(students)      
}



export const DELETE=()=>{

    
        console.log("The Data Has been Delete Please Give")
        return NextResponse.json(
            {
                message:"Deleted !",
                status:true
            }
        )
        
    

}