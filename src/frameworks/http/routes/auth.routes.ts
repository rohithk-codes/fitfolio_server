import {Router} from "express"
import { signupController } from "../../../interfaceAdapters/controllers/auth.controller.js"

const router = Router()

router.post("/:role/signup",signupController)

export default router