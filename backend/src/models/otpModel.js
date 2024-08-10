import mongoose from "mongoose";

// OTP Schema
const OTPSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    otp: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 600 // OTP expires after 10 minutes (600 seconds)
    }
});
const OTP = mongoose.model('otp', OTPSchema);


function generateOTP() {
    let digits = '0123456789';
    let OTP = '';
    let len = digits.length
    for (let i = 0; i < 4; i++) {
        OTP += digits[Math.floor(Math.random() * len)];
    }
    return OTP;
}
const storeOTP = async (email, otp) => {
    try {

        const newOTP = new OTP({
            email,
            otp
        });
        await newOTP.save();
    } catch (error) {
        console.error('Error storing OTP:', error);
        return error;
    }
};
      
const retrieveOTP = async (req,res) => {
    try {
        if(OTP.findOne(req.body.email))
        {
            if(OTP.findOne(req.body.otp))
            return res.status(200).json({result:true, message: "Match Otp " });
            return res.status(500).json({result:false, error: "OTP Doesn't Match " });
        }else
        return res.status(401).json({result:false, error: "User Is Not Found " });
    } catch (error) {
        console.error('Error retrieving OTP:', error);
        return error;
    }
};

export { OTP, storeOTP, retrieveOTP, generateOTP };