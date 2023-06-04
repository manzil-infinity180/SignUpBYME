const express= require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended:true}));
let firstname,lastname,email;

app.get("/",function(req,res){
     res.sendFile(`${__dirname}/index.html`);
     // res.sendFile(__dirname+"/index.html");   // both work fine 
})
app.post("/",(req,res)=>{
     const status = res.statusCode;
    if (status===200) {
     // res.send("aur ji khaana ho gael ki nahhi");
     res.sendFile(__dirname+"/success.html");
     app.post("/success",(request,response)=>{
     response.redirect("/");
})
     // res.send(`Full name is: ${req.body.fName} ${req.body.lName}.`);
    }else{
     res.sendFile(__dirname+"/failure.html");
     app.post("/failure",(request,response)=>{
          response.redirect("/");
     })
    }
      firstname = req.body.fName;
      lastname = req.body.lName;
      email=req.body.email;
});
app.post("/show",(req,res)=>{
    const htmlfile=`
    <h1>FirstName: ${firstname}</h1>
    <h1>LastName: ${lastname}</h1>
    <h1>Email: ${email}</h1>
    `
     res.send(htmlfile);
     res.redirect("/sucess")
     // console.log(firstname +" " + lastname+ " "+ email);
     console.log(htmlfile);
});

// mailchimp api

app.listen(process.env.PORT || 9000,'127.0.0.1',()=>{
     console.log("hello from port 9000");
})

