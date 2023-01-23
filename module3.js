/*let intt = require('./module4.js');


const intro = (nam) =>
{
  console.log(`Hello there , ${nam}`)
};
intro(intt.ab);
*/
//console.log(module)
 const intro = (nam) =>
{
  console.log(`Hello there , ${nam}`)
};

const intrv = (nam) =>
{
  console.log(`Bye there , ${nam}`)
};

console.log(module.exports);
module.exports.key = "VALL";

console.log(module.exports);

module.exports = {intro ,intrv}  ;

//module.exports.key = "VALL";

console.log(module.exports)


 module.exports= 
{  intro ,
  intrv,
  king : "Ashoka",
  Capital : "Patliputra"
};

module.exports.key = "XALL";
console.log(module.exports);