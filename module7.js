const replaceStr = (str, char, replacer) => {
  //  const regex = new RegExp(char, "g")
    const replaced = str + char + replacer ;
    console.log(replaced);
    return replaced
  }
  
  module.exports = { replaceStr }
  // or
  //exports.replaceStr = replaceStr