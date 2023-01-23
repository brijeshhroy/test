// file system

let {readFileSync,writeFileSync} = require('fs');
let lane = require('path');

let way = lane.resolve("Fsys","Practice.txt")                 // Line 1
 console.log("This file which we will use to write is :- " ,way);
 let read = readFileSync(way, 'utf-8') 
 console.log(read,'\n');

let waytwo = lane.join("D:","\NODEJS","FreeCodeCamp","FSys","Test.txt")            // Line 2

console.log("This file which we will use to write is :- " ,waytwo);

let readtwo = readFileSync(waytwo, 'utf-8') ;


console.log(readtwo);
console.log(readtwo[3]);
console.log(readtwo.length);

let a = "This content will go to writefilesync folder having full directory name";

let waythree = lane.resolve("/FileSync-creations","Level 1");             // Line 3
console.log("This is the location where files will be created :-",waythree);
//console.log(waythree+"\\fre.txt");
writeFileSync(waythree+"\\Test1.txt",read);              //line 4           // Main for writing
writeFileSync(`${waythree}\\Test2.txt`,"H11ELLO");              //line 5
writeFileSync(`${waythree}`+"\\Test3.txt","H11ELLO");         // line 6
writeFileSync(`${waythree}`+"\\Test3.txt","This was not suppose to happen");  // line 7 :- to show that file removes previous things
writeFileSync(`${waythree}`+"\\Test3.txt",",but it  happened",{flag : 'a'});   //use of flag to prevent removal of prev data

writeFileSync("D:\\FileSync-creations\\XOUGH\\Zirect.txt",a);      // Line 7  // Main incase of whole directory
// writeFileSync("D:\\FileSync-creations\\XOUGH\kirect.txt",a);
// writeFileSync("D:\\FileSync-creations\XOUGH\Xirect.txt",a);

writeFileSync(waythree+"\\treat.txt",read);  

console.log(typeof way  )
console.log(typeof read )
console.log(typeof  waytwo )
console.log(typeof readtwo);


/* Points to note
1.  In line 1 ,2,3 we used previous concept of path.resolve and join to practice it.

2. Writefilesync creates file if not exisiting.Remember only file , the rest of the folders in path should be present otherwise
   it throws error. 

3. line 4 to 6 shows 3 diffn ways to create and write in file. Line 4 is the best one.

4. Use Line 7 in case you have whole directory path.Remember to use double \\ otherwise it works as escape character and attaches
    the name of previous filder and txt file and creates it one level above, line 34 and 35 shows it

5. Note :- Since these files are already created, please change the files name eveytime you run it or delete the files.

6. Flags are used to fix if it will remove previous data or not. Here is link :- https://nodejs.org/api/fs.html#file-system-flags





*/
