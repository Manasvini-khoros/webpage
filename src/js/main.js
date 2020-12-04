var http = require('http');
var fs = require('fs');
var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var myReadStream = fs.createReadStream(__dirname + '/index.html','utf8')
    myReadStream.pipe(res);
});


fs.appendFile('mynewfile2.txt', 'Hello content aallll!', function (err) {
    if (err) throw err;
    console.log('Saved!');
});
fs.open('mynewfile3.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('Saved!');
});
fs.writeFile('mynewfile2.txt', 'This is my text', function (err) {
    if (err) throw err;
    console.log('Replaced!');
});
fs.unlink('mynewfile2.txt', function (err) {
    if (err) throw err;
    console.log('File deleted!');
});
server.listen(9000);
