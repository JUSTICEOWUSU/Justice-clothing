import {model,Schema} from "mongoose"

interface User{
    name:string,
    email:string,
    id:number,
    password:string
}

const userModel = new Schema<User>({
    name:String,
    id:Number,
    password:String,
    email:{
        type:String,
        required:true
    }
})

const users = model<User>("User",userModel);

export default users