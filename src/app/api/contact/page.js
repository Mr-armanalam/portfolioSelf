import nodemailer from "nodemailer"
const transporter = nodemailer.createTransport({
    host: "",
    port: 587,
    secure: false,
    auth: {
        user: "armanalam78578@gmail.com",
        pass: "Arman@123#"
    }
});

export default async(req,res)=>{
    const {username, email, description} = req.body;

    try {
        await transporter.sendMail({
            from: {email},
            to: "armanalam78578@gmail.com",
            subject: "New Message from portfolio",
            text: `Name: ${username} \nEmail: ${email}\nDescription: ${description}`
        });
        res.status(200).json({message: "Email sent successfully"})
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Error sending email"});
    }
}