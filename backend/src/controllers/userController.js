import {User} from "../models/userModel.js";
import jwt from 'jsonwebtoken';
import bcrypt from "bcryptjs";

export const signUp = async(req,response)=>{
    try {
        let user = await User.findOne({email:req.body.email});
        if(!user){
            let password = req.body.password;
            let saltkey = bcrypt.genSaltSync(10);
            password= bcrypt.hashSync(password,saltkey);
            req.body.password=password;
            let result = await User.create(req.body);
            console.log(result);
            return response.status(200).json({ message: "Sign up success", user: result });
        }
        else{
            return response.status(401).json({ message: "Email Already Exists"});
        }
    } catch (error) {
        return response.status(500).json({ message: "Sign up unsuccessfull",error});
    }
        
}