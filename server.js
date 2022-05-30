const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const MongoClient = require('mongodb').MongoClient
const connectionString = 'mongodb+srv://twodimes:Mizzou23@cluster0.jvzkg.mongodb.net/?retryWrites=true&w=majority'


MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
  })
  .catch(error => console.error(error))
  
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

