const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const MongoClient = require('mongodb').MongoClient
const connectionString = 'mongodb+srv://twodimes:Mizzou23@cluster0.jvzkg.mongodb.net/?retryWrites=true&w=majority'


MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
    const db = client.db('star-wars-quotes')
    const quotesCollection = db.collection('quotes')

    app.set('view engine', 'ejs')

//Middlewares and other routes here...
//Make sure you place body-parser before your CRUD handlers!
    app.use(bodyParser.urlencoded({extended: true}))
    app.get('/',(req, res) => {
      quotesCollection.find().toArray()
      .then(results => {
        console.log(results);
      })
      .catch(error => console.error(error))
      res.sendFile(__dirname + '/index.html')
      //Note: __dirname is the current directory you're in. Try logging it and see what you get!
    })
    app.post('/quotes', (req,res) => {
      quotesCollection.insertOne(req.body)
      .then(result => {
        res.redirect('/');
      })
      .catch(error => console.error(error))
    })
    app.listen(3000, function(){
      console.log('listening on 3000');
    })
  })
  .catch(error => console.error(error))



