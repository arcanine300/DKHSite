var express = require("express")
var app = express()
var HTTP_PORT = process.env.PORT || 8000

app.use(express.static("public"));

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});
 
var server = app.listen(HTTP_PORT, () => {
    console.log("Ready to handle requests on port " + HTTP_PORT);
});