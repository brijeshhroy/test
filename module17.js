

// OBJECTS

let dine = require('./module18.js')

var intro =
{
  "name" : "Deepak" ,                 // property name with quotes
   Age : 12 ,                        // property name without quotes
   "Last Location" : "New Delhi" ,
     Job : "Engineer", 
    18 : "RAAAT",
    "15" : "1111" ,
    333 : "My name is" ,
    "666" :  789,
    122 : dine.Coder() ,
    "With Space" : dine.Yet()

} ;

console.log(intro);


var s = intro.name ;
console.log(s);
console.log(intro["Job"]);    // inside square bracket string proeprty has to be in double quotes
console.log(intro[18]);     // Eg 1  - Property and fetching both without double quotes
console.log(intro["15"]);     // Eg 2  - Property and fetching both with double quotes
console.log(intro["333"]);    // Eg3  - Property without and fetching with double quote
console.log(intro[666]);     // Eg 4  - Property with and fetching without double quote
intro["122"]();                  // Eg 5 - Property without and fetching with double quote
intro["With Space"]();
console.log(typeof intro.Age);
console.log(typeof Age);




// Points to remember
/*
1.Property name  whether string or number  can be declared with/without quotes.But property value if string should be with
  quotes.However if string property name has space , they have to be in quotes.


2.A general rule of thumb followed by most developers is to use dot notation, unless the key in the object contains
  spaces, hyphens or starts with a number , in those cases user square brakcets [].


3.If a property is having numerical name like  in line9,10 ,11 i.e (18,"15",122). No matter if these numbers are in double quotes 
  or just like that , they can be written in any manner i.e. with or without double quotes inside sq. bracket. 
  This rule holds true whether property is storing any value or any function.
  See Eg 1 ,2,3,4. Eg 5 in case of function

4.If you are fetching any property which is a string value by using square bracket notation , then you have to put it in 
  double quotes.See Line 29

*/