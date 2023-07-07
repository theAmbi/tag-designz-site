import nodemailer from 'nodemailer';
const email = process.env.EMAIL;
const pass = process.env.PASSWORD;

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: email,
        pass: pass,
    },
    port: 465,
    secure: true,
    // tls: { rejectUnauthorized: false },
})

export const mailOptions = {
    from: email,
    to: email,
}