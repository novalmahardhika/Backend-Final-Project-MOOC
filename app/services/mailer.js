const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
        user: '',
        pass: '',
    },
    secure: true
});

exports.sendMail = async (data) => {
    const verifyURL = "http://localhost/api/v1/account-verify?email=" + data.email + "&otp=" + data.otp
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
    
    return await transporter.sendMail(mail, function (err, info) {
        if (err) console.error(err);
    });
}