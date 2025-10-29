import bcrypt from "bcryptjs";
import { User } from "../../entities/User.js";

type SignupInput = {
  role: "admin" | "user" | "trainer";
  name: string;
  email: string;
  password: string;
};

export async function signupUseCase(input: SignupInput) {
  const { role, name, email, password } = input;
  const existingUser = await User.findOne({ email, role });
  if (existingUser) {
    return {
      ok: false as const,
      status: 409,
      message: "User already exist for this role",
    };
  }
  const passwordHash = await bcrypt.hash(password,10)
  const user = await User.create({name,email,passwordHash,role})
  return {
    ok:true as const ,
    status:201,
    data:{id:user.id,name:user.name,email:user.email,role:user.role}
  }
}
