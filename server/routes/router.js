const express = require('express');
const route = express.Router();
//var mail = require('../configs/email');
const nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
const dotenv = require('dotenv');
const path = require('path');
    dotenv.config({path: './config.env'})

const services = require('../services/render');
const controller = require('../controller/controller');

/**
 * @description Root Route
 * @method GET /
 */
route.get('/', services.homeRoutes);

/**
 * @description add product
 * @method GET /add-product
 */

route.get('/add-product', services.add_product);

/**
 * @description update product
 * @method GET /update-product
 */ 

route.get('/update-product', services.update_product);

//--------------------------------------------
route.post('/api/products', controller.create);
route.get('/api/products', controller.find);
route.put('/api/products/:id', controller.update);
route.delete('/api/products/:id', controller.delete);
//route.post('', mail.sendMail());

let transporter = nodemailer.createTransport(smtpTransport({
    host: process.env.SMTP_MAIL_HOST,
    port: process.env.SMTP_MAIL_PORT,
    auth: {
      user: process.env.SMTP_MAIL_USERNAME, 
      pass: process.env.SMTP_MAIL_PASSWORD, 
    }
  }));
  
  //get route to send mail, from form
  route.post('/api/send-email', function(req,res){
    //options
    const mailOptions = {
         from: process.env.SMTP_MAIL_USERNAME,
         to: 'gigi_benedetti@hotmail.com.br',
         subject: 'Test mail',
         text:'Email enviado com sucesso.'
     };
    //delivery
    transporter.sendMail(mailOptions, function(error, info){
         if (error) {
             console.log(error);  
         } else {     
             console.log('Email sent: ' + info.response);  
             res.redirect('/add-product');
         }   
    });
});

module.exports = route;