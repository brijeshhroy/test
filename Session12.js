const hyper = require('http');
//console.log(typeof hyper);
//console.log(typeof hyper.createServer);

let server = hyper.createServer((req,res)=>
{   if(req.url === '/')
    res.end("This will be my Solace")
    else if(req.url === '/about')
    res.end("This is about section")
    else
    res.end(`
    <h1>Oops!</h1>
    <p>This was a mistake</p>
    <a href="/">back home</a>
    `)
}

)

console.log(typeof hyper.createServer());

server.listen(1201);


/* 
Points to understand

1)  A web server is a computer system that processes requests via HTTP, the basic network protocol used to distribute
    information on the World Wide Web. The term can refer either to the entire system or specifically to the software
    that accepts and supervises the HTTP requests.

2) .createServer creates a server (so as per point 1) i.e it just creates something which is capable of  accepting request
    listening to port & be able to do other duties of a server.

3)  .listen makes a server listen to a particular port , that is anything happens on that port it will respond.

4)  Rememeber that even opening a website is a request (request to send a copy to client) , so that is why even opening 
    the site triggers the response.


5). Remember that localhost:1200 or  http://127.0.0.1:1200 is the domain name. Our url always starts from / which comes after
    1200. That is why for homepage the url will be just "/"

*/
