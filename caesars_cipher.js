function rot13(str) {
    //Splits str into an array
  let strArr = str.split("");

    //Declares variables representing the alphabet as normal and the alphabet offset by 13 characters
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const alpha13 = "NOPQRSTUVWXYZABCDEFGHIJKLM";

    //Function for converting encoded letter into decoded letter
  function convert(arg) {
      //Declares a variable representing the regex used to filter arg
    var re = new RegExp("[^A-Z]");
        //If arg contains a non-alphabet character, return as is
      if (re.test(arg)) {
        return arg;
        //Else, take the letter in arg, find its index value in alphabet, then find the letter at that same index in alpha13 and return it
      } else {
        let index = alphabet.indexOf(arg);
        let result = alpha13.charAt(index);
        return result;
    }
  }

    //Declares resultF as an array in which each element of strArr is run through the convert function
  const resultF = strArr.map(x => x.replace(x, convert(x)));
    //Joins resultF into a string and returns it
  return resultF.join("");
}

console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));