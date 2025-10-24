import mongoose,{Schema,model,HydratedDocument} from "mongoose";
import {User} from "../../../../domain/entity/user-entity.js";

export type UserDocument = HydratedDocument<User>;

const userSchema = new Schema <UserDocument>(
{
  
    email:{type:String,required:true,unique:true},
    password:{type:String},
  
    
}
)




