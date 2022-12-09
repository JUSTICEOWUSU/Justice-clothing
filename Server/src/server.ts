import http from "http"
import app from "./app"

const server = http.createServer(app)

const PORT = process.env.PORT || 7000

server.listen(PORT,()=>{
    console.log("listening to port: " + PORT);
    
})