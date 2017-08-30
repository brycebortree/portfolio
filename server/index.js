var app = require('./app');

var PORT = process.env.PORT || 8673;

app.listen(PORT, function(){
  console.log("App listening on port " + PORT);
});
