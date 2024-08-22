import {User} from "../models/userModel.js";
import jwt from 'jsonwebtoken';
import bcrypt from "bcryptjs";
export const signIn = async (request, response) => {
    try {
        let { email, password } = request.body;
        let user = await User.findOne({ email });
        return user ?
            bcrypt.compareSync(password, user.password) ? response.status(200).json({ message: "Sign in successs", user: { ...user.toObject(), password: undefined }}) : response.status(401).json({ error: "Bad request", message: "Invalid password" })
            : response.status(401).json({ error: "Bad request", message: "Invalid email id" });
    }
    catch (err) {
        console.log(err);
        return response.status(500).json({ error: "Internal Server Error" });
    }
}
export const resetPassword = async (request, response) => {
    try {
        let { email, password } = request.body;
            let saltkey = bcrypt.genSaltSync(10);
            password= bcrypt.hashSync(password,saltkey);
        User.updateOne({ email },{
            $set:{password: password}
        }).then(result=>{
            if(result.modifiedCount)
              return response.status(200).json({result: "Password updated..."});
            return response.status(401).json({error: "Bad request (Id not found)"});  
        }).catch(err=>{
            return response.status(500).json({message: "Internal Server Error"});
        });
    }
    catch (err) {
        console.log(err);
        return response.status(500).json({ error: "Internal Server Error" });
    }
}

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