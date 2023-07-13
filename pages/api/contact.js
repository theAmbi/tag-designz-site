import { mailOptions, transporter } from '@/config/nodemailer';

const handler = async (req, res) => {
    if (req.method === "POST") {
        const data = req.body;
        if (!data.firstName || !data.email || !data.message) {
            return res.status(400).json({ message: 'Bad request' });
        };
        try {
            await transporter.sendMail({
                ...mailOptions,
                subject: "New Message for TAG Designz",
                text: "this is a test string",
                html: `<h1>New email from TAG Designz website</h1>
                        <p>${data.message}</p>
                        <p>Message sent from ${data.firstName} by ${data.email}</p>
                        `
            });
            return res.status(200).json({ message: 'Email sent successfully!' });
        } catch (error) {
            console.log(error);
            return res.status(400).json({ message: error.message });

        }

    }


}

module.exports = handler;