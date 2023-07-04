// import nodemailer from 'nodemailer';
// import smtpTransport from 'nodemailer-smtp-transport';
// const ContactFunction = (req, res) => {
//     sendEmail = async => {
//         try {
//             const transporter = nodemailer.createTransport(
//                 smtpTransport({
//                     service: 'Gmail',
//                     // port: 465,
//                     host: "smtp.gmail.com",
//                     auth: {
//                         user: 'tagdesignzall@gmail.com',
//                         pass: process.env.PASSWORD,
//                     },
//                     secure: true,

//                 })
//             );
//         } catch (error) {

//         }
//     }
//     // let nodemailer = require('nodemailer')

//     // send email
//     transporter.sendMail({
//         from: 'tagdesignzall@gmail.com',
//         to: 'tagdesignzall@gmail.com',
//         subject: `Message from ${req.body.name}`,
//         text: req.body.message + " | Sent from: " + req.body.email,
//         html: `<div>${req.body.message}</div>`,
//     });
//     // console.log(req.body);
//     res.status(200)

// }

// server.js
const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('api/send-email', (req, res) => {
    const { name, email, recipient, subject, message } = req.body;

    // Create a Nodemailer transport using Gmail SMTP
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'your-email@gmail.com',
            pass: 'your-email-password'
        }
    });

    // Compose the email
    const mailOptions = {
        from: `${name} <${email}>`,
        to: recipient,
        subject,
        text: message
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3001');
});


export default ContactFunction;