import sendMail from '../services/nodemailer.js';


export const sendMailController = async (req, res) => {
    try {
        const { email } = req.body;

        const response = await sendMail(email)

        return res.status(200).json({ message: 'Send email successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
