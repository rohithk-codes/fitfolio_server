import dotenv  from  "dotenv"
dotenv.config()


export const env = {
    PORT:process.env.port || "3000",
    CORS_ORGIN:process.env.CORS_ORIGIN ||  "http://localhost:5173" ,
    MONGO_URI:process.env.MONGODB_URI || "",

    
}