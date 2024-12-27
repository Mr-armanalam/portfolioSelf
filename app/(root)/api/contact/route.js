import nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 465,
  secure: true,
  auth: {
    user: process.env.PORTFOLIO_EMAIL,
    pass: process.env.PORTFOLIO_PASSWORD,
  },
});

export const POST = async (req) => {
  const { username, email, description } = await req.json();
  try {
    await transporter.sendMail({
      from: email,
      to: process.env.PORTFOLIO_EMAIL,
      subject: "Greeting Message from portfolio",
      // text: `Name: ${username} \nEmail: ${email}\nDescription: ${description}`,
      html: `<h3>Mr./Mrs. ${username}</h3> <p><small>${email}</small></p> \n <p>${description}</p>`,
    });
    return new Response("Email sent successfully", { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Error sending email", { status: 500 });
  }
};
