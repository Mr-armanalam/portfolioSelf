import nodemailer from "nodemailer"
const transporter = nodemailer.createTransport({
  //host: "armanalam78578@gmail.com",
  service:"gmail",
  port: 465,
  //sendmail: true,
  //logger: false,
  secure: true,
  auth: {
      user: "armanalam78578@gmail.com",
      pass: "jwiw hjkj oqqo shyc"
  }
});

export const POST = async(req,res)=>{
  const { username, email, description } = await req.json();
  try {
    //console.log(username, email);
    await transporter.sendMail({
        from: `${username} <${email}>`,
        to: "armanalam78578@gmail.com",
        subject: "Greeting Message from portfolio",
        //text: `Name: ${username} \nEmail: ${email}\nDescription: ${description}`,
        html: `<h3>Dear ${username}</h3> <p><small>${email}</small></p> \n <p>${description}</p>`
    });
    return new Response("Email sent successfully", { status: 200 });
  } catch (error) {
    console.log(error);
   return new Response("Error sending email", { status: 500 });
  }
}