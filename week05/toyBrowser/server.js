const http = require('http')

http.createServer((request, response) => {
    let body = []
    request.on('error', (err) => {
        console.log('error ', error)
    }).on('data', (chunk) => {
        body.push(chunk.toString())
    }).on('end', () => {
        console.log('end body: ', body)
        // body = Buffer.concat(body).toString()
        response.writeHead(200, { 'Content-Type': 'text/html' })
        response.end('Hello World\r\n')
    })
}).listen(8080)
