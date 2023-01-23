const lane = require('path');

console.log(lane.sep)
console.log(lane.join('/lev1', 'lvl2', 'tt1.docx'));
console.log(lane.join('//lev1', 'lvl2', 'tt2.docx'));
console.log(lane.join('///lev1', 'lvl2', 'tt3.docx'));
console.log(lane.join('\\lev1', 'lvl2', 'tt4.docx'));
console.log(lane.join('\\\lev1', 'lvl2', 'tt5.docx'));
console.log(lane.join('\lev1', 'lvl2', 'tt6.docx'));
console.log(lane.join("D:\\", 'lev1\\', 'lvl2\\', 'yt7.docx'));    // Main 1
console.log(lane.join("D:", '\lev1', '\lvl2', '\yt7.docx'));         // Main 2
console.log(lane.join('path', 'to', 'test.txt'));
console.log("VGX\lFG")

console.log(lane.delimiter);

console.log(lane.basename('/Users/Refsnes/demo_path.js'));        // XMain3
console.log(lane.basename('\Python27\ArcGIS10.2\python.exe'));      
console.log(lane.basename('D:\\NODEJS\\FreeCodeCamp\\lev1\\lvl2.exe'));   // XXX factor

console.log(lane.basename(String.raw `C:\Users\john\file.txt`));    // Main 4
console.log(lane.basename(String.raw`C:\Users\john\file.txt`, '.txt'));    // Main 5
console.log(lane.basename(String.raw`D:\NODEJS\FreeCodeCamp\lev1\lvl2`));   // Main 6

console.log(String.raw`\python27\ArcGIS10.2\python.exe`);
console.log(String.raw`D:\NODEJS\FreeCodeCamp\lev1\lvl2`);


let way =  lane.join( 'C:','\Users','\BRIJESH','\Documents','\Zoom','last.txt');
console.log("This is the correct path :- " ,  way);
let final = lane.basename(String.raw`C:\Users\BRIJESH\Documents\Zoom\last.txt`);
console.log("This is the final file :- " , final );



//address  display method in windows is D:\NODEJS\FreeCodeCamp\lev1\lvl2

/*  
Read the answer of dronus on this link :-
https://stackoverflow.com/questions/9756567/do-you-need-to-use-path-join-in-node-js    

There is also screenshot of it by name "Screenshot (1987).png"

*/


/*
Points to Note :-
1. Main 1 and Main 2 are suitable way to form an address in windows using path.join , given how location are present in
   windows.

2. Windows  work on both i.e. '\' abd '/' for path segment ,however path.join or path.sep always consider '\' i.e. 
   backslash for windows , that is why it will always print '\' while executing any function having path module.
   
3. However, since single '\' is an escape character so we have too use double '\\' to print a single backslash.

   See this link :- https://stackoverflow.com/questions/3903488/javascript-backslash-in-variables-is-causing-an-error

4. XMain 3, Main 4 , Main 5 & Main 6 are some ways to acheive real objective of basename function. However , in windows by default 
   forward slash are not in any address so XMain 3 is not very useful.

5. XXX factor is one of the way but then in windows '\\' is also not found. However , for some try purpose we can use it,
    '\\' has been added so that a proper address can be found by virtue of rule 3.

6. Therefore, please remember that always prefer Main 4,5,6 for getting proper result of .basename. 


7. In ,Main 5 , '.txt' is optional parameter, if not given then it will print filename with extension.
    

*/
