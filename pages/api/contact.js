import nodemailer from 'nodemailer';
import smtpTransport from 'nodemailer-smtp-transport';
const ContactFunction = (req, res) => {
    sendEmail = async => {
        try {
            const transporter = nodemailer.createTransport(
                smtpTransport({
                    service: 'Gmail',
                    // port: 465,
                    host: "smtp.gmail.com",
                    auth: {
                        user: 'tagdesignzall@gmail.com',
                        pass: process.env.PASSWORD,
                    },
                    secure: true,

                })
            );
        } catch (error) {

        }
    }
    // let nodemailer = require('nodemailer')

    // send email
    transporter.sendMail({
        from: 'tagdesignzall@gmail.com',
        to: 'tagdesignzall@gmail.com',
        subject: `Message from ${req.body.name}`,
        text: req.body.message + " | Sent from: " + req.body.email,
        html: `<div>${req.body.message}</div>`,
    });
    // console.log(req.body);
    res.status(200)

}

export default ContactFunction;