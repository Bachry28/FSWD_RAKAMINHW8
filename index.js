var express = require('express');
var app = express();
var pool = require('./query.js');
var router = require('./router.js');

app.use('/mydb', router);
pool.connect((err, res)=>{
    console.log(err)
    console.log('connected')
})
app.listen(3000);