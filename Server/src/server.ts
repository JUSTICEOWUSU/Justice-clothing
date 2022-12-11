import http from "http"
import app from "./app"
import connectToDatabase from "./database/DBConnection/mongoDBConnection"
import {config} from "dotenv";

config();
const server = http.createServer(app)

const PORT: string | number = process.env.PORT || 7000

const startServer = async () => {    
    await connectToDatabase();
    server.listen(PORT, () => {
        console.log("listening to port: " + PORT);
    })
}

// Starting Server
startServer()
