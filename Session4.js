const lane = require('path');




console.log(typeof lane);
console.log(lane);
console.log(typeof lane.sep);
console.log(lane.sep);
console.log(lane.dirname);
 
console.log(lane.dirname('D:\Pgms\JavaScript'));
//console.log(typeof sep);    // it is undefined as node.js does not indetify sep in itself.

console.log('foo\\bar\\baz'.split(lane.sep));
console.log('foo\\\\\\/bar\\baz'.split(lane.sep));    //
console.log('foo\\/bar\\baz'.split(lane.sep));
console.log('foo\\\\\\\\/bar\\baz'.split(lane.sep));
// Returns: ['foo', 'bar', 'baz']


/* 
Points to Note 

1. In windows '\' is the separator.

2. commands like dirname ,just work on the given parameter. They don't check if actually any such file exists on this
   location or not.

3. From line 16 it can be seen that, after 2 cosnecutive blackslash i.e. '\\' , it will seperate and after that for ever \\
   it will create a new element. If it is odd then it will ignore the least \ and won't do anything for it.

   Means
   console.log('foo\\\\\\\\/bar\\baz'.split(lane.sep)); :- there are total 8 '\' , so for first two will be used
   in seprating foo and after that 6 remains so 3 empty '' will be created.

   console.log('foo\\\\\\\\\/bar\\baz'.split(lane.sep)); :- there are total 9 '\' , so for first two will be used
   in seprating foo and after that 7 remains so 3 empty '' will be created and last one will be left.



4. Please See, Session3.js for something important

*/

