import {model,Schema} from "mongoose"

interface User{
    username:string,
    email:string,
    id:number,
}

const userModel = new Schema<User>({
    username:String,
    id:Number,
    email:{
        type:String,
        required:true
    }
});

const users = model<User>("User",userModel);

export default users