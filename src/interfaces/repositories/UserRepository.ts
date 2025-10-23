import {User} from "../../domain/entity/user-entity.js";

export interface UserRepository{
    save(user:User):Promise<User>
    findByEmail(email:string):Promise<User | null>
}