let lane = require('path');

let way = lane.resolve();
console.log();
console.log(way);   // it works as _dirname with local disk shown in capital
console.log(lane.resolve(__dirname,"this","is","first","line.txt"))    // Line a           // Main 1
console.log(lane.resolve("this","is","second","line.txt")) ;       // Line b             // Main 2
console.log(lane.resolve("\dhis","is","second","line.txt"))      // Line c   
console.log();
console.log(lane.resolve("F:","zeat","tree.txt"))       // line d        // Main 3
console.log(lane.resolve("F:","\zeat","tree.txt"))       // line e                
console.log(lane.resolve("F:/","zeat","tree.txt"))      // line f
console.log(lane.resolve("F:","/zeat","tree.txt"))     //line g
console.log(lane.resolve("q:","\zeat","tree.txt"))      // line h
console.log(lane.resolve("q","\zeat","tree.txt"))      // line i  =>  : is absent
console.log(lane.resolve("sF:","\zeat","tree.txt"))      // line j  => two letter i.e. sF
console.log();
console.log(lane.resolve(".vfgv","fsfvsvf","rgbbv"));   //  line k  //works same as line b  i.e. dot does nothing excepting adding itself
console.log(lane.resolve("/isers/admin", "readme.md"))   //line l    //Main 4    //forward slash directly takes the root directory disk name only 
console.log(lane.resolve("./Brij/Roy", "readme.md"))   // line m
console.log(lane.resolve(".\isers/admin", "readme.md"))      // line n
console.log(lane.resolve("\ztock/market", "readme.md"))          // line o
  
console.log(lane.resolve("/isers", '/dd', 'c'))




/*
Points to Note 
1. path.resolve will always result in an absolute URL, and will use your working directory as a base to resolve this path. 
   That is why we use __dirname as first parameter in general  as if our website goes somewhere else still 
   it can take root directory for that system

2. Path.resolve accepts  sequence od paths or path segements as as paramater and then resolves it into absolute path.

3. Line a => __dirname automatically fetches the working directory of current file.

4. Line b & c => if __dirname is not given it automaticcaly fetches the working directory ,although disk name is small letter 
              =>  Adding backward slash like in line c does nothing , it works same as line b

5. Line d to h   => If the first parameter contains conly single letter (small ir capital) with : after it 
                    that is taken as root directory. No need to add \ or / in first or in any paramter.


6. line i , j  => Absence of : or presence of two letters in first parameter makes it behave like normal as line b

7. line k  => adding dot(.) , it just adds in the first paramter string and then works normal.  Eg D:\.vfgv

8. line l =>  Adding forward slash makes it takes the Root disk and then add all parameter from thereon , 
               whereas skiiping rest of the folder in between  .

           

9.  line m => It removes dot(.) and nothing else.

10. line n => just puts dot(.) before isers and works same as line k

11. line o => amalgamation of line b and  rule 12

12.  If there is is a "/" between two terms in a single paramter , like it has "isers/admin" 
     this seperates isers and admin into two level with isers before admin.

13. Remember a final rule , any .resolve will take the root directory path  unless it has forward slash "/" i.e. line l.

14.  resolve creates paths from right to left and with the / in /path an absolute path can be created. 
      The method will stop here and will completely ignore everything to the left.


Main 1 :- Works best if may need to send our project to someplace else

Main 2 :- Works if we intend to keep file in our system only. We can use Main 1 inplace of it

Main 3 :- If we are making it for some specific system and we know the path alrerady

Main 4 :- If we only want to take root disk and rest else directory layout will be planned by us.

*/