const express = require('express')
const Cat  = require('./model')
const app = express()
const port = 8000 || process.env.PORT


app.get('/createpage',(req,res)=>{
  var MongoClient = require('mongodb').MongoClient;
  var url = "mongodb://my-service:80/test";
  
  MongoClient.connect(url,{
    
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false
  
  } ,function(err, db) {
    if (err) throw err;
    console.log("Database created!");
    db.close();
  }); 

res.end('created');
})

app.get('/', async(req, res) => {
    var t;
    
await new Promise((resolve,rej)=>{


    const kitty = new Cat({ name: 'ahmed' });
    kitty.save().then(() =>  
    Cat.find().then(data=>{
        t = data;
        res.json(data)
        resolve('oldu')
    }));
})


res.send('finshed');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
