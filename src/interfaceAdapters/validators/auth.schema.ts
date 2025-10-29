import {z} from "zod";

export const roleParamSchema = z.enum(["admin","user","trainer"])
export const signupSchema = z.object({
    name:z.string().min(2,"Name must be at least 2 letters"),
      email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters")

})