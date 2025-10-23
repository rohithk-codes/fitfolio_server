import { User } from "../../domain/entity/user-entity.js";
import { UserRepository } from "./UserRepository.js";


export class InMemoryUserRepository implements UserRepository{

    private users: User[]=[]
    async save(user: User): Promise<User> {
        this.users.push(user)
        return user
    }
    async findByEmail(email: string): Promise<User | null> {
        return this.users.find(u=>u.email===email) || null
    }
}