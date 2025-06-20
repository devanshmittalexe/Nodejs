const http = require('http');

// function requestlistener(req,res){
//   console.log(req);
// }

// http.createServer(requestlistener);


// we can also write above code like this

// http.createServer(function(req,res){
//   console.log(req);
// });

// also like this 
// http.createServer((req,res)=>{
//   console.log(req);
// });


// now we creater server but it has to listen everytime for requests;

// we do this by listening the object returned by the createserver method 


const server = http.createServer((req,res)=>{
  console.log(req);
});

// here 3000 is called port

// it ensures the request reaches the correct place in the server 

// server.listen(3000);

// currently we are not getting any mssg when server starts , for so we can..

const port=3000;
server.listen(port , ()=>{
  console.log(`server is listening at http://localhost:${port}`);
})