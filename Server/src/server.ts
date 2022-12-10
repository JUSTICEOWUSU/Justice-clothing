import http from "http"
import app from "./app"

const server = http.createServer(app)

const PORT: string | number = process.env.PORT || 7000

const startServer = async () => {
    server.listen(PORT, () => {
        console.log("listening to port: " + PORT);
    })
}

// Starting Server
startServer()
