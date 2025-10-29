import { Schema,model } from "mongoose";

export type Role = "admin" | "user" |"trainer";

const userSchema = new Schema(
    {
        name:{type:String,required:true,trim:true},
        email:{type:String,required:true,trime:true},
        passwordHash:{type:String,required:true},
        role:{type:String, enum:["admin","user","trainer"],required:true}  
    },
    {timestamps:true}
)
userSchema.index({email:1,role:1},{unique:true})

export const User = model("User",userSchema)