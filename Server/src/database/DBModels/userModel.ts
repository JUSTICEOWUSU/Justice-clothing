import {model,Schema} from "mongoose"

interface User{
    username?:string,
    email?:string,
    id:number,
}

const userModel = new Schema<User>({
    username:String,
    id:{
        type:Number,
        required:true
    },
    email:String,
});

const users = model<User>("User",userModel);

export default users