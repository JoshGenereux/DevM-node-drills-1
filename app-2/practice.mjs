//import module
import * as http from 'http';

// Save the result of the createServer() method in a variable named server.
const server = http.createServer();

// Call the server's listen() method with the port number 3001.
server.listen(3001, ()=> console.log(`running on port 3001`))