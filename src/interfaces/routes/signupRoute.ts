
import express from "express"
import { SignupController } from "../controllers/signupController.js";

export function setupSignupRoute(controller:SignupController){
    const router = express.Router()

    router.post("/signup",async(req,res)=>{
    console.log("signuproute",req.body)
        const result = await controller.handle(req.body)
    
        res.json(result)
    });
    return router;
}