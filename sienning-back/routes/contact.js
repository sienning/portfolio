var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require("cors");
var app = express();
require('dotenv').config();

app.use(cors());

var transporter = nodemailer.createTransport({
  // pool: true,
  port: process.env.MAIL_PORT,
  secure: false, // use TLS
  host: process.env.MAIL_HOST,
  service: "hotmail",
  tls: {
    ciphers: 'SSLv3'
  },
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
});

/* GET home page. */
router.post('/email', function (req, res, next) {
  console.log("------------------------------------------");
  console.log("message : ", req.body.message);
  console.log("from : ", req.body.email);
  var mailOptions = {
    from: process.env.MAIL_USER,
    to: process.env.MAIL_USER,
    subject: 'Mail site portfolio',
    text: 'MAIL: '+ req.body.email +'\nDe : ' + req.body.last_name + " " + req.body.first_name + '\n\n' + req.body.message
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("Oups, une erreur ...");
      console.log(error);
      res.sendStatus(400);
    } else {
      console.log('Email sent: ' + info.response);
      res.sendStatus(200);

    }
  });
});

module.exports = router;