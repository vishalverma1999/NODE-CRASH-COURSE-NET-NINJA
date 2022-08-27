// starting ke 5 min client-server communication ke baare mein hai and about https--> refer to video only

// creating server
// in node we actually write code to create a server and listen for requests coming in from the browser. Now this is totally different from a language like PHP for example where we don't have to create the server manually and we have other tools which manage that for is like Apache but in node we manually create the server which lives on the backend of our website and it's this server that then listens for requests from the browser and then decides what responses to send to the browser
const http = require('http');

// http.createServer(), method to create a server for us
// const server --> storing the instance of the server
// callback function is gonna run every time a request comes in to our server
// inside callback fun we get access to two different objects - 1) request object  2) response object
// request object comes loaded full of information about the request such as the URL that is being requested so, also other information like the request type is a get request or a post request
// response object, is the object that we use to actually send a response to the user in the browser

const server = http.createServer((req, res)=>{   
    console.log('request made');
});

// invoking the listen method, so that server starts listening
// 1st argument - port number, 2nd - hostname, it's default value is localhost(here we are writing it explicitly), 3rd callback function- it fires when we started listening
server.listen(3000, 'localhost', ()=>{
    console.log('listening for requests on port 3000');
})

// localhost is like a domain name on the web
// port numbers are like 'doors' into a computer through which internet communication can be made to different programs
// our server also needs its own port number to communicate through
// loclahost:3000 --> browser then knows to connect to our own computer via this particular port number which is where our server is going to be listening 

// what is localhost? well localhost is like a domain name that we'd use in the web, a bit like google.com for example but this one is one that takes us to a very specific IP address called a loopback IP address now this IP address is 127.0.0.1 and it points directly back to your own computer so that means that when we're connecting to the local host domain in a browser the browser is actually connecting back to our own computer which is then acting as a host for our website so the host name local host means listen for requests coming to our own computer and this is how we use our own computer as a host when we're developing a website