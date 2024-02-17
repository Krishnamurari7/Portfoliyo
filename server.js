// const express = require("express");
// const cors = require("cors");
// const dotenv = require("dotenv");

// //dotenv configuartion
// dotenv.config();

// //rest object
// const app = express();

// //midlewares
// app.use(cors());
// app.use(express.json());

// //routes
// app.use("/api/v1/portfolio", require("./routes/portfolioRoute"));
// // app.get('/',(req, res) => {
// //   res.send('<h1>Node server</h1>')
// // })

// //port
// const PORT = process.env.PORT || 8080;

// //listen
// app.listen(PORT, () => {
//   console.log(`Server Runnning On PORT ${PORT} `);
// });






const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());

// Setup nodemailer transporter with your email provider's SMTP details
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your_email@gmail.com',
    pass: 'your_email_password',
  },
});

// Define a route to handle contact form submissions
// app.post('/send-email', (req, res) => {
//   const { name, email, message } = req.body;

//   const mailOptions = {
//     from: 'ayaankumar7488@gmail.com',
//     to: 'recipient_email@example.com',
//     subject: 'New Contact Form Submission',
//     text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       return res.status(500).send(error.toString());
//     }
//     res.status(200).send('Email sent: ' + info.response);
//   });
// });

const sendMail = require("./controllers/portfolioContoller")

app.get("/sendmail", (req, res) => {
  res.send("I am a server");
});

  app.get("/sendemail", sendMail)

 const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {}
 };
 start();