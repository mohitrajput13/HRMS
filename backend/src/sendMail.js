import nodemailer from "nodemailer";
import { User } from "./models/userModel.js";
import { storeOTP, generateOTP } from "./models/otpModel.js";
const sendMail = async (req, res) => {
    console.log(req.body.email);
    const email =req.body.email;     
    let user = await User.findOne({ email });
    if (user) {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
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
            storeOTP(req.body.email, otp);
            console.log("message sent :%s", info);
            return res.status(200).json({ result: "Otp send Succefully", info });
        }
        catch (error) {
            console.log(error);
            return res.status(401).json({ error: "Internal Server Error", error });
        }
    }
    else{
        return res.status(401).json({ error: "User Is Not Found" });
    }

};
export default sendMail;
