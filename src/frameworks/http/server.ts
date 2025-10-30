import  express  from "express";
import cors from "cors"
import {env} from "../../config/env.js"
import authRoutes from "./routes/auth.routes.js"

export function buildServer(){
  const app = express()

  app.use(cors({origin:env.CORS_ORGIN,credentials:true}))
  app.use(express.json());

  app.use("/api/auth",authRoutes)
  return app
}