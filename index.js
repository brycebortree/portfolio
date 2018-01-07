const express = require('express');
const path = require('path');
const compression = require('compression');

const app = express();

app.use(compression());

app.use("/assets", express.static(__dirname + '/assets'));
app.use("/images", express.static(__dirname + '/images'));
app.use(express.static(path.join(__dirname, '/')));

app.get('*', function (req, res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

const port = process.env.PORT || 8673;
console.log('listening to port ', port);
app.listen(port);
