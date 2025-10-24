
import { SignupUseCase } from "../../use-cases/auth/signup.useCase.js";


export class SignupController{
    constructor(private signupUseCase:SignupUseCase){}

    async handle(request:{email:string; password:string}):Promise<any>{
        try{
            console.log("signupcontroler")
            const user = await this.signupUseCase.execute(
                request.email,
                request.password
            )

            return {
                success:true,
                data:{id:user._id,email:user.email}
            }
        }catch(error){
            return{
                success:false,
                error:'Signup failed'
            }
        }
    }


}