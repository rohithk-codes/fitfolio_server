import { User } from "../entity/user-entity.js";
import type { IBaseRepository } from "./base.repository.js";

export interface IUserRepository extends IBaseRepository<User> {
  findByEmail(email: string): Promise<User | null>;
}
