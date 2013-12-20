var express = require('express');  // Pulls in the express framework

/*
    Mongoose is a standard library used with Node to interact with MongoDB
 */

var mongoose = require('mongoose'); // Pulls in the mongoose library
var user = process.env.DB_USER;
var pass = process.env.DB_PASSWORD;
mongoose.connect('mongodb://' + user + ':' + pass + '@ds061208.mongolab.com:61208/heroku_app20540978');

/*
    App Configuration Section
 */
var app = module.exports = express(); // Creates our app with express support
app.configure(function() {
    /*
        bodyParser() - http://expressjs.com/api.html
        This is middleware that supports parsing JSON, urlencoded and multipart requests
        ** It is recommended to disable file upload functionality if it is not needed
     */
//    app.use(express.bodyParser()); // Automatically includes JSON, urlencoded and multipart requests
    app.use(express.json()); // This handles JSON parsing
    app.use(express.urlencoded()); // This handles urlencoded parsing

    /*
        methodOverride() - http://www.senchalabs.org/connect/methodOverride.html
        This is connect middleware which allows you to simulate a DELETE or PUT (REST services)
        An example of this is in controllers.js within EditPostController and within this file (app.put)
        Stackoverflow - http://stackoverflow.com/questions/8378338/what-does-connect-js-methodoverride-do
     */
    app.use(express.methodOverride());

    /*
        This handles static files (e.g. css, js, img, etc.).
     */
    app.use(express.static(__dirname + '/../public'));

    /*
        This explicitly handles route requests from the browser.  For example, http://localhost:3000/about will
        try and locate a route ( app.get('/about...) ) that matches.
     */
    app.use(app.router);

    app.set('port', process.env.PORT || 3000); // Sets the port based on the environment or to 3000
    app.set('views', __dirname + '/../public'); // Jade views will be found under public (also under partials)
    app.set('view engine', 'jade'); // Jade will be our view engine

    app.use(express.logger('dev')); // log every request to the console

    /*
        errorHandler() - http://www.senchalabs.org/connect/errorHandler.html
        Provides stack traces and error message responses for requests
     */
    console.log('ENV: ' + app.get('env'));
    if (app.get('env') === 'development') { // Only do error handling in development
        app.use(express.errorHandler());
        // We can put more 'development' specific things here as well...
    }
})

/*
    RESTful routes, found in routes/api.js
 */
var api = require('./routes/api');
app.get('/api/posts', api.posts);

app.get('/api/post/:id', api.post);
app.post('/api/post', api.addPost);
app.put('/api/post/:id', api.editPost);
app.delete('/api/post/:id', api.deletePost);

/*
    Other routes, found in routes/index.js
 */
var routes = require('./routes/index');
app.get('/', routes.index);
app.get('/partials/:name', routes.partials);
app.get('*', routes.index); // redirect any routes not found to the index (HTML5 history)

// Let's create the server and list on the port defined in the configuration above
var http = require('http');
http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});