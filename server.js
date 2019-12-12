var express = require("express")
var app = express()
var port = 8080


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", function(req, res) {
    res.send("welcome to the merch homepage");
});
// // serving routes




//deployment
app.listen(process.env.PORT || 8080, function(){
    console.log("server running on port : " + port)
  });
   