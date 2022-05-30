const express = require('express');
const bodyParser = require('body-parser')
const app = express();

//Make sure you place body-parser before your CRUD handlers!
app.use(bodyParser.urlencoded({extended: true}))

//All your handlers here...
app.listen(3000, function(){
  console.log('listening on 3000');
})

//We normally abbreviate `request` to `req` and `response` to `res`.
app.get('/',(req, res) => {
  res.sendFile(__dirname + '/index.html')
  //Note: __dirname is the current directory you're in. Try logging it and see what you get!
  //Mine was C:\Users\twodi\devClass\StarwarsApp for this app!
})

app.post('/quotes', (req,res) => {
  console.log(req.body);
})