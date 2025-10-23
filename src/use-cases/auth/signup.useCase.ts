import {User} from "../../domain/entity/user-entity.js";
import { UserRepository } from "../../interfaces/repositories/UserRepository.js";


export class SignupUseCase{

    constructor(private userRepository:UserRepository){}

    async execute(email:string,password:string):Promise<User>{
        const user:User={
            _id:Date.now().toString(),
            email,
            password
        }
return await this.userRepository.save(user)
    }  
}