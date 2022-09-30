var EmailDB = require('../model/email-model');
const nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
const dotenv = require('dotenv');
const path = require('path');
    dotenv.config({path: './config.env'})

exports.create=(req, res) => {
    try {
        if(!req.body){
            res.status(400).send({message: "Não pode ser nulo"});
            return;
        } else {
            const email = new EmailDB({
                emailFrom: req.body.emailFrom,
                emailTo: req.body.emailTo,
                subject: req.body.subject,
                text: req.body.text,
                sendDateEmail: new Date(),
                statusEmail: 'SEND'
                })

            const mailOptions = {
                from: 'falconfiap1sit@gmail.com',
                to: email.emailTo,
                subject: email.subject,
                text: email.text
                }

                const transporter = nodemailer.createTransport({
                    host: process.env.SMTP_MAIL_HOST,
                    port: process.env.SMTP_MAIL_PORT,
                    auth: {
                        user: process.env.SMTP_MAIL_USERNAME, 
                        pass: process.env.SMTP_MAIL_PASSWORD,
                    }
                })
                transporter.sendMail(mailOptions, function(err, info){
                    if(err){
                        res.status(500).send({
                            message: "Não foi possível enviar o e-mail."});
                    } else {
                        email.save(email).then(data => {
                            res.send(data);
                        })
                    }
                })
        }

    } catch(error) {
        console.log('Error: ', error);

    }
}

        
exports.find = (req, res) => {

    if(req.query.id){
        const id = req.query.id;

        EmailDB.findById(id)
        .then(data => {
            if(!data){
                res.status(404).send({message: "Não foi possível encontrar o email!"})
            } else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({message:"Erro ao encontrar o email!"})
        })

    } else{
        EmailDB.find().then(produto =>{
            res.send(produto)
        }).catch(err =>{
            res.status(500).send({message: err || "Não foi possível listar os emails!"})
        })
    }    
}


  
  