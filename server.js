#!/bin/env node

require('newrelic');

var express = require('express'),
    fs      = require('fs'),
    http = require('http'),
    https = require('https'),
    path = require('path'),
    app = express(),
    router = require('./router');

//Select environment
if("OPENSHIFT_NODEJS_IP" in process.env){
    //openshift
    app.ipaddress = process.env.OPENSHIFT_NODEJS_IP;
    app.port      = process.env.OPENSHIFT_NODEJS_PORT;
}
else {
    //local
    app.ipaddress = "0.0.0.0";
    app.port = "3000";
}


var certs = {
  pfx: fs.readFileSync('certs/localhost.pfx'),
  passphrase: "ssdfe3sfdsfwee"
};

//send static data compressed with gzip.
app.use(express.compress());                    
//allows using PUT and DELETE along with GET and POST requests
app.use(express.methodOverride());
//set public folder
app.use('/public', express.static(__dirname + '/public', { maxAge: 1 }));
//allows defining of routes and routing variables
app.use(app.router);
//parses the post body of requests into request.body 
app.use(express.bodyParser());

app.get('/',router.home);
app.get('/views/:page',router.partials);
app.get('*',router.home);

//run server
var server = app.listen(app.port,app.ipaddress); 
console.log("server running");