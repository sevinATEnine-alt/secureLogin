var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'calvin.michael.smith1@gmail.com',
    pass: 'smithfamily704'
  }
});

var mailOptions = {
  from: 'calvin.michael.smith1@gmail.com',
  to: 'emily.russell.smith@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});