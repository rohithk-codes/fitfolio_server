import { SignupController } from "../../interfaces/controllers/signupController.js";
import { InMemoryUserRepository } from "../../interfaces/repositories/InMemoryUserRepository.js";
import { SignupUseCase } from "../../use-cases/auth/signup.useCase.js";

export function bootstrap(){
    const userRepository = new InMemoryUserRepository()
    const signupUseCase = new SignupUseCase(userRepository)
    const signupController = new SignupController(signupUseCase)
    return {signupController}
}