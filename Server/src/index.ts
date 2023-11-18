import http from "http"
import app from "./app";
import {connectToDatabase} from "./database/DBConnection/mongoDBConnection"
import loadStoreData from "./MongoDB_DATA/MongoStoreData";
import loadCategoryData from "./MongoDB_DATA/MongoCategoriesData";
import {config} from "dotenv";
config();

process.setMaxListeners(15);


const server =http.createServer(app)

const PORT: string | number = process.env.PORT || 7000

const startServer = async () => {    
    await connectToDatabase();
    await loadCategoryData();
    await loadStoreData();
    server.listen(PORT, () => {
        console.log("listening to port: " + PORT);
    })
}

// Starting Server
startServer()




