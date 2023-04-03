var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'gabsiyosr00@gmail.com',
      pass: 'password'
    }
  });
  
  var mailOptions = {
    from: 'gabsiyosr00@gmail.com',
    to: 'gabsiyosr01@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, (err, info)=>{
    if (err) {
      console.log(err);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });