const express=require('express');
const ejs=require('ejs');
const bodyParser=require('body-parser');
const path=require('path');
const sendMail = require('./mail')
const POR = 3000;
const app = express();

//initilizing nexmo

//using static files (css, images etc...)
app.use(express.static('public'));


//parsing data
app.use(express.urlencoded({extended: false}));

app.use(express.json());


//mail post method
app.post('/email', (req,res) =>{

  const {name, email , subject, text} = req.body;
  console.log('Data: ' ,req.body);

  sendMail(name, email, subject, text, function(err,data){
    if(err){
      res.status(500).json({message: "Internal error"});
    } else{
      res.json({message: "Email sent"});
    }

  });

});


//rendering contact page
app.get('/contact',(req,res) => {
    res.sendFile(path.join(__dirname,'views','contact.html'));
})



//rendering home page
app.get('/',(req,res)=>{

  res.sendFile(path.join(__dirname ,'views', 'home.html'));

});



//starting server
app.listen(process.env.PORT || POR, () => console.log("Server started at port 3000"));



//connect to socket.io
