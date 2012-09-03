// Simple module to server static files from a directory using node-static

var http = require('http');
var statik = require('node-static');

exports.create = function create(directory, options, port) {

    var file = new(statik.Server)(directory, options);

    var server = require('http').createServer(function(request, response) {
        request.addListener('end', function() {
            file.serve(request, response, function(e, rsp) {
                if (e && e.status === 404) {
                    response.writeHead(e.status, e.headers);
                    response.end("not found");
                    console.log("not found: "+request);
                } 
            });
        });
    });
    server.listen(port);
    return server;
};