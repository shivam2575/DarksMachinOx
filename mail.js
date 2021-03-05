const nodemailer=require('nodemailer');
const mailgun=require('nodemailer-mailgun-transport');

const auth = {

  auth: {

    api_key: 'key-0e235add303d2f9d0019b2776515e219',
    domain: 'sandbox8140da1b2afa4a37a6bed6d326675b00.mailgun.org'

  }

};

const transporter = nodemailer.createTransport(mailgun(auth));


const sendMail = (name, email, subject, text, cb) => {

  const mailOptions = {
    from: email,
    to: 'irctc2575@gmail.com',
    subject: subject,
    text: [name, text]

  };

  transporter.sendMail(mailOptions, function(err,data){

    if(err){
      cb(err,null);
    }else{
      cb(null,data);
    }

  });

}

module.exports = sendMail;
