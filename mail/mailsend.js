'use strict';
const nodemailer = require('nodemailer');
var env       = process.env.NODE_ENV || 'development';
if(env === "development"){
    var configs = require('./../nodemailerConfig.js');

}
// var port     = process.env.PORT || 8080;

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.email || configs.email,
        pass: process.env.email || configs.password
    }
});

// // setup email data with unicode symbols
// let mailOptions = {
//     from: '"Fred Foo 👻" <kasjmk@yahoo.com>', // sender address
//     to: 'alexslayton.home@gmail.com', // list of receivers
//     subject: 'this is another test', // Subject line
//     text: 'Hello world hey hey?', // plain text body
//     html: '<b>Hello world ?</b>' // html body
// };



var mail = {
    mailOptions: function(to, subject, text, html){
        return {
            from: 'LendOwe <lendoweapp@gmail.com>', // sender address
            to: to || '', // list of receivers
            subject: subject || 'this is another test', // Subject line
            text: text || 'Hello world hey hey?', // plain text body
            html: html || '<b>Hello world ?</b>' // html body
        }
    },
    sendMail: function(options, cb){
        var mOptions;
        // send mail with defined transport object
        if(typeof options === undefined){
            mOptions = this.mailOptions();
        }else{
            mOptions = options;
        }

        transporter.sendMail(mOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message %s sent: %s', info.messageId, info.response);
            cb();
        });
    }
}


module.exports = mail;