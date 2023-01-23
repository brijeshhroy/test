const hyper = require('http');
//console.log(typeof hyper);
//console.log(typeof hyper.createServer);

let server = hyper.createServer((req,res)=>
{
    res.write("This is getting difficult");
    res.end();
}

)

console.log(typeof hyper.createServer);