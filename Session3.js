 let win = require('os');
 
 console.log(typeof win)
 console.log(win.cpus);
console.log("This is the entire os module :- ",win);

 console.log("This is the user info - " , win.userInfo());

let updur ;
 console.log("Uptime is :-", win.uptime());
 console.log(win.devNull);

 let winobj = 
 {
    name : win.type(),
    release : win.release(),
    totalspace : win.totalmem(),
    freespace : win.freemem()

 };

 console.log("The name of OS is :- " , winobj.name);
 console.log("All info is :- " , winobj);



// 1 and 5  does same thing as what below lines of code does

/*

let { userInfo}  = require('os');

console.log(userInfo());

*/

/* 
Point to note

1.Every single module is an object. Remember that objects can have strings or even functions as values of a key. 
  So sometime if we want to use such property of the module which is actually a function then we write like
  "win.function_name()" i.e. we have to put "()" so that  , the particular function of module will be executed.

  However , if the property we want to use is a has a string as a value , we just use it with "."
  It's example is "lane.sep" in Session4.js

  We can always do console.log(module_name ) and check if anything in particular  property is a function or  string value.


  */


