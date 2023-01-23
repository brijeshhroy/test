/*
Points to Remember

1) npm calls the resuable code a package , paclage is a folder that has a js code 

2. npm i package_name   => This is to install a package locally i.e. only in that particular project

3.  npm install -g package_name =>  This is to install a package globally i.e.it can be used in any project on whole system

4. use 'npm init' - to create package.json as it stores important info , here it asks for each value .

5. use 'npm init -y'  -to create package.json with default value

6. Remember that fs,http are node modules , they come embedded with node.js . However , packages like prompt 
   or lodash are  external and thus we need to install them before in order  to use them .

 */

   const low = require('lodash');

   let z  = [1,[2,[3,4,[5,6,7]]]];

   let xnew = low.flattenDeep(z);
   console.log(xnew);