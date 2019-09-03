var express = require('express');
var entry= require('./entry.js');


module.exports = function(app) {
    app.route('/').post(entry.dialogflowFulfillment);
    app.get('/',function(request,response){
        response.send('Server is up and running');

    });


}