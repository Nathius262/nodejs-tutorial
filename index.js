import http from 'http';

http.createServer((req, res)=>{
    console.log('server running on port 8000')
    res.writeHead(200, {"content-type":"Application/Json"});
    return res.end(JSON.stringify({'data': 'Welcome to the home page'}));
}).listen(8000);