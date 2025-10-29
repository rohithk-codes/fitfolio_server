
import { Request,Response } from "express";
import { roleParamSchema,signupSchema } from "../validators/auth.schema.js";
import { signupUseCase } from "../../useCases/auth/signup.usecase.js";

export const signupController = async(req:Request,res:Response)=>{
    const roleParsed = roleParamSchema.safeParse(req.params.role)
    const bodyParsed = signupSchema.safeParse(req.body)

    if(!roleParsed.success || !bodyParsed.success){
        return res.status(400).json({message:"Invalid data"});
    }

    const result = await signupUseCase({
        role:roleParsed.data,
        ...bodyParsed.data
    })
    if(!result.ok){
        return res.status(result.status).json(result.message)
    }

    return res.status(result.status).json({user:result.data})
}