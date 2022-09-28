// const nodemailer = require('nodemailer');
// var smtpTransport = require('nodemailer-smtp-transport');
// const dotenv = require('dotenv');
// const path = require('path');
// dotenv.config({path: 'config.env'})

// let mailTransporter = nodemailer.createTransport(smtpTransport({
//   host: process.env.SMTP_MAIL_HOST,
//   port: process.env.SMTP_MAIL_PORT,
//   secure: process.env.SMTP_MAIL_PORT_PROPERTIES_MAIL_SMTP_STARTTLS_ENABLE,
//   auth: {
//     user: process.env.SMTP_MAIL_USERNAME, 
//     pass: process.env.SMTP_MAIL_PASSWORD, 
//   }
// }));

// //get route to send mail, from form
// router.post("/send-email", function(req,res){
//      //options
//      const mailOptions = {
//           from: process.env.SMTP_MAIL_USERNAME,
//           to: 'gigi_benedetti@hotmail.com.br',
//           subject: 'Test mail',
//           text:'<h1>this is a test mail.</h1>'
//       };
//      //delivery
//      transporter.sendMail(mailOptions, function(error, info){
//           if (error) {
//               console.log(error);  
//           } else {     
//               console.log('Email sent: ' + info.response);  
//           }   
//      });
// });
// module.exports = router;
