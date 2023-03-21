//http request, necessary for web server

const http = require('http');

//req = request, res = response
//req is an object with many different properties
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our homepage')
    }
    if (req.url === '/about') {
        res.end('here is our short history')
    }
    res.end(`<h1>OOPS!</h1>
    <p> Bitch this aint no page! </p>
    <a href='/'>back home</a>`)
})




//what port is our server going to be listening to

server.listen(5000)