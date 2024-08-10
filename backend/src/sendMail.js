import nodemailer from "nodemailer";
import { storeOTP,generateOTP } from "./models/otpModel.js";
const sendMail = async (req, res) => {
    console.log(req.body.email);
    
    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth: {
            user: 'mouryamohitsingh@gmail.com',
            pass: 'rumt pkpn qtfg pcae'
        }
    });
    try {
        const otp = generateOTP();
        const info = await transporter.sendMail({

            from: '"Mohit Rajput" <mouryamohitsingh@gmail.com>', // sender address
            to: req.body.email, // list of receivers
            subject: "For Otp with in a 2 min", // Subject line
            html: `<b>${otp}</b>`, // html body
        });
        storeOTP(req.body.email,otp);
        console.log("message sent :%s",info);
        return res.status(200).json({ message: "Otp send Succefully" ,info });
    }
    catch (error) {
        console.log(error);
        return res.status(401).json({ error: "Internal Server Error" ,error});
    }
    
    
   
};
export default sendMail;
