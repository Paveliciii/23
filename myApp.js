let express = require('express');
let app = express();
console.log("Hello World")
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});
app.use('/',function(req,res){
    res.sendFile(__dirname + "/public/style.css")
})


































 module.exports = app;
