const nodemailer = require("nodemailer");
const { otpTypeList, sendMailType } = require("../../config/struct.js")
const ApplicationError = require("../../config/errors/ApplicationError.js");

const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
        user: 'ideacademy5@gmail.com',
        pass: 'gmau apwq glhh frcn',
    },
    secure: true
});

async function sendMailOtp(data) {
    const verifyURL = (data.otpType == "verify") ? "http://localhost/api/v1/account-verify" : "http://localhost/api/v1/forgot-password"
    const mail = {
        from: 'Ideamy <no-reply@gmail.com>',
        to: data.email,
        subject: 'Ideamy OTP is here!',
        text: `Your Ideamy OTP Code is '${data.otp}'`,
        html: 
        `
        <body style=" text-align: center; line-height: 1.5;">
        <p><b>Your Ideamy OTP is here!</b></p><br/>

        <a href="${verifyURL}" style="text-decoration: none; font-size: 2rem; color: #FFF; padding: .5rem 1rem; background-color: #22F; border-radius: 0.5rem;">
        Verify
        </a><br/>

        <p>Your OTP Code is '${data.otp}'</p>
        </body>
        `,
    };
    
    try {
        await transporter.sendMail(mail);
    } catch (err) {
        console.log(err.message);
        throw new ApplicationError("Something is wrong.", 500);
    }
}

exports.sendMail = async (data, type) => {
    switch(type) {
        case sendMailType.otp:
            return await sendMailOtp(data);
    }
}