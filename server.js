//1. NODE DEPENDENCIES
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//2. SETTING UP EXPRESS APP
var app = express();
var PORT = process.env.PORT || 8080;

//3. SETTING UP EXPRESS APP TO HANDLE DATA PARSING
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));

//4. ROUTERS 
require('./api/routes/apiRoutes.js')(app);
require('./api/routes/htmlRoutes.js')(app);

//5. LISTENER
app.listen(PORT, function(){
    console.log('App listening on PORT: ' + PORT);
})