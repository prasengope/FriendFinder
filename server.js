//1. NODE DEPENDENCIES
var express = require('express');
var path = require('path');

//2. SETTING UP EXPRESS APP
var app = express();
var PORT = process.env.PORT || 8080;

//3. SETTING UP EXPRESS APP TO HANDLE DATA PARSING
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//4. ROUTERS 
require('./app/routes/apiRoutes.js')(app);
require('./app/routes/htmlRoutes.js')(app);

//5. LISTENER
app.listen(PORT, function(){
    console.log('App listening on PORT: ' + PORT);
})