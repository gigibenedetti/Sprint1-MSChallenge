const express = require('express');
const route = express.Router();


const controller = require('../controller/controller');
const controllerEmail = require('../controller/email-controller');

route.post('/api/products', controller.create);
route.get('/api/products', controller.find);
route.put('/api/products/:id', controller.update);
route.delete('/api/products/:id', controller.delete);

route.post('/api/send-email', controllerEmail.create);
route.get('/api/send-email', controllerEmail.find);
// let transporter = nodemailer.createTransport(smtpTransport({
//     host: process.env.SMTP_MAIL_HOST,
//     port: process.env.SMTP_MAIL_PORT,
//     auth: {
//       user: process.env.SMTP_MAIL_USERNAME, 
//       pass: process.env.SMTP_MAIL_PASSWORD, 
//     }
//   }));
  
//   route.post('/api/send-email', function(req,res){
//     const mailOptions = {
//          from: process.env.SMTP_MAIL_USERNAME,
//          to: 'gigi_benedetti@hotmail.com.br',
//          subject: 'Test mail',
//          text:'Email enviado com sucesso.'
//      };
//     transporter.sendMail(mailOptions, function(error, info){
//          if (error) {
//              console.log(error);  
//          } else {     
//              console.log('Email sent: ' + info.response);  
//          }   
//     });
// });

module.exports = route;