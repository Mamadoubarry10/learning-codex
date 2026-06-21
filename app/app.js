const { createServer } = require('http');

const server = createServer((request, response) => {
    response.writeHead(200, { 'content-Type': 'text/html'});
    response.write('<h1>Hello world!</h1>');
    return response.end();
})

server.listen(8080, () => {
    console.log('Server listening on port 8080');
    console.log("webhook test");
});