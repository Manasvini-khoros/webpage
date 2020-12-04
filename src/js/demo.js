var http = require('http');
var fs = require('fs');
var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var myReadStream = fs.createReadStream(__dirname + '/get.html', 'utf8')
    myReadStream.pipe(res);
});
server.listen(9000);
console.log("Server is running on port 9000");
