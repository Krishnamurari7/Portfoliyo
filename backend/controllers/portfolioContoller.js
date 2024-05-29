// // import { SMTPClient } from 'emailjs';

// const nodemailer = require("nodemailer");
// // const sendGridTransport = require("nodemailer-sendgrid-transport");
// // const nodemailer = require('nodemailer');
// const transporter = nodemailer.createTransport({

// // //transport
// // const transporter = nodemailer.createTransport(
// //   SMTPClient({


//     auth: {
//       api_key: process.env.API_SENDGRID,
//     },
//   });

// // );

// const sendEmailController = (req, res) => {
//   try {
//     const { name, email, msg } = req.body;

//     //validation
//     if (!name || !email || !msg) {
//       return res.status(500).send({
//         success: false,
//         message: "Please Provide All Fields",
//       });
//     }
//     //email matter
//     transporter.sendMail({
//       to: "Ayaankumar7488@gmail.com",
//       from: "ayaankumar7488@gmail.com",
//       subject: "Regarding Mern Portfolio App",
//       html: `
//         <h5>Detail Information</h5>
//         <ul>
//           <li><p>Name : ${name}</p></li>
//           <li><p>Email : ${email}</p></li>
//           <li><p>Message : ${msg}</p></li>
//         </ul>
//       `,
//     });

//     return res.status(200).send({
//       success: true,
//       message: "Your Message Send Successfully",
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).send({
//       success: false,
//       message: "Send Email API Error",
//       error,
//     });
//   }
// };

// module.exports = { sendEmailController };

const nodemailer = require("nodemailer");
const portfolioContoller = async(req, res) => {
let testAccount = await nodemailer.createTestAccount();
  
const transporter = await nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
      user: 'lance.herzog49@ethereal.email',
      pass: 'JjazPnfkkmGps9dd2Y'
  }
});

let info = await transporter.portfolioContoller({
  
        from: "Krishna",
        to: "Ayaankumar7488@gmail.com",
        subject: "Hello Mern Portfolio App by krishna murari",
        html: "<b>hello krishna</b>"
        // `
        //   <h5>Detail Information</h5>
        //   <ul>
        //     <li><p>Name : ${name}</p></li>
        //     <li><p>Email : ${email}</p></li>
        //     <li><p>Message : ${msg}</p></li>
        //   </ul>
        // `,
})

console.log("Message sent: %s", info.massageId);

  res.json("info")
};

module.exports = portfolioContoller;