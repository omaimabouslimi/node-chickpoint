var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ouerghiomaima1@gmail.com',
    pass: 'eagh eweo rnii flow'
  }
});

var mailOptions = {
  from: 'ouerghiomaima1@gmail.com',
  to: 'riadh.khtr@gmail.com',
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