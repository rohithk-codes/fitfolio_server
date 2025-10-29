import {env} from "./config/env.js"
import {connectMongo} from "./db/mongo.js"
import { buildServer } from "./frameworks/http/server.js"

async function main(){
    await connectMongo()

    const app = buildServer()

    app.listen(env.PORT,()=>{
        console.log(`server running on http://localhost:${env.PORT}`)
    })    
}

main().catch((err)=>{
    console.error("Error running",err)
    process.exit(1);
})