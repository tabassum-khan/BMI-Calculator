const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

//initialise the express app;
const app = express();
const port = 3000;

//use boy parser
app.use(bodyParser.urlencoded({extended : true}));

//add static pages
app.use(express.static('public'));

//set teh view engine to ejs by letting the express server know
app.set('view engine', 'ejs'); //by default it look for files in the views folder

app.get("/", function(req, res){
  // To render the ejs pages, we use render(filename, data_json);
    res.sendFile(__dirname + "/index.html");
});

app.get("/index.html", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

// app.post("/", function(req, res){
//   var weight = req.body.weight;
//   var feet = req.body.feet;
//   var inches = req.body.inches;

//   var height =  ((feet*12) + inches) * 0.0254;
//   var bmi = weight/(height*height);
//   console.log(bmi);

//   res.render('index');
// });


app.listen(port, () => console.log("Server has started on port 3000"));
