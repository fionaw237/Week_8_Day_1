const express = require('express');
const app = express();

//middleware functionality
app.use(express.static('client/public'));

app.get('/', function(req, res){
  // res.send('Hello world!');
  res.sendFile('index.html');
})

app.listen(3000, function(){
  console.log("App running on port 3000");
});
