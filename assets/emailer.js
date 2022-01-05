var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'vismgps@gmail.com',
    pass: `s1ngh123!!`
  }
});

const sendMail = ( recipient, subject, html ) => {
  const mailOptions = {
    from: 'vismgps@gmail.com',
    to: recipient,
    subject: subject,
    html: html
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

module.exports = {
  sendMail,
};

