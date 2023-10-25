 import  {connect,connection} from  "mongoose";

 connection.once("open",()=>{
    console.log("Successfully connected to mongoDb database");
 });

 connection.on("error",()=>{
    console.log("Sorry! Could not connect to mongoDB database");
    
 })

 const connectToDatabase:()=>void = async()=>{
   
    // Connecting to MONGODB Database
    await connect(`${process.env.MONGODB_KEY}`)
 }

 export default connectToDatabase