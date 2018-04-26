/* Convert Lower to Upper */

var upperObj = { 
  97 : 'A', 
  98 : 'B', 
  99 : 'C', 
  100: 'D', 
  101: 'E', 
  102	: 'F', 
  103	: 'G', 
  104	: 'H', 
  105	: 'I', 
  106	: 'J', 
  107	: 'K', 
  108	: 'L', 
  109	: 'M', 
  110	: 'N', 
  111	: 'O', 
  112	: 'P', 
  113	: 'Q', 
  114	: 'R', 
  115	: 'S', 
  116	: 'T', 
  117	: 'U', 
  118	: 'V', 
  119	: 'W', 
  120	: 'X', 
  121	: 'Y', 
  122	: 'Z', 
  32  : ' ', 
  63  : '?', 
  46  : '.', 
  44  : '!' 
}; 
 
var converLowerToUpper = (str) => {
  let arr = []; 
  let strN = []; 
  for(var i=0; i<str.length; i++) { 
    strN.push( str.charCodeAt(i) ); 
  } 
  strN.filter(function(u) { 
    arr.push(upperObj[u]); 
  }); 
 return arr.toString().replace(/\,/g,"");
};

var str = 'how r u? am good, thank u.';
var converLowerToUpper = converLowerToUpper(str);
console.log(converLowerToUpper);

/* increment count down - recursive function*/
var countD = (num) => {
  if (num >= 11) return;
  console.log(num);
  countD(num + 1);
};
countD(1);

/*make array of key in upper case*/
'use strict';
let arrInput = [];
let arrFinalOutput = [];

arrInput['vikas'] = 1;
arrInput['bose'] = 'a';
arrInput['siva'] = 'vbo';
arrInput['kotresh'] = 'vbo';
arrInput['Dinesh'] = 2;
arrInput['broTher'] = '?';
arrInput['sIsTer'] = 'cdfdf';

for(arrInputs in arrInput) {
  arrFinalOutput[arrInputs.toUpperCase()] = arrInput[arrInputs];
}

/* pass the string and convert vowel into capital latter */
console.log(str.replace(/[aeiou]/gi, 
  function(a){
   return a.charAt().toUpperCase();
}));

/* How to change the font color (inbuld function in JS str.fontColor(str, color)) */
var fontColors = function(str, colorValue) {
   var cElement = document.createElement("div");          [create element or heml tag]
   var cElementStyle = document.createAttribute("style"); [for creating attribute like id, class etc]
   cElementStyle.value = `color: ${colorValue}`;          [so this value assign to the style property or attribute]
   cElement.setAttributeNode(cElementStyle);              [it will bind your property or attribute]
   // cElementStyle.setAttribute("color", colorValue);
   var t = document.createTextNode(str)                   [create or place the text into the tag]
   cElement.appendChild(t);                               [it will bind the text or string in tag]
   document.body.appendChild(cElement);                   [it will bind entier elemnt with body tag]
   return cElement;                                       [if you want to see the function value then only return]
}
var a = "hello world";
fontColors(a, "yellow");

/* Return the string value according to index number */
let arrCharIndex = function(str, cb) {      [create callback method]
  return cb(str, i);
};
var i = 2;
var b = arrCharIndex(str, function(d, i){   [define the callback function]
    let a = str.split("");
    return a[i];
});
console.log(b);

/* Return the ascii code based on the char */
const asciiCode = {
  "31": "",      "32": " ",     "33": "!",     "34": "\"",    "35": "#",    
"36": "$",     "37": "%",     "38": "&",     "39": "'",     "40": "(",    
"41": ")",     "42": "*",     "43": "+",     "44": ",",     "45": "-",    
"46": ".",     "47": "/",     "48": "0",     "49": "1",     "50": "2",    
"51": "3",     "52": "4",     "53": "5",     "54": "6",     "55": "7",    
"56": "8",     "57": "9",     "58": ":",     "59": ";",     "60": "<",    
"61": "=",     "62": ">",     "63": "?",     "64": "@",     "65": "A",    
"66": "B",     "67": "C",     "68": "D",     "69": "E",     "70": "F",    
"71": "G",     "72": "H",     "73": "I",     "74": "J",     "75": "K",    
"76": "L",     "77": "M",     "78": "N",     "79": "O",     "80": "P",    
"81": "Q",     "82": "R",     "83": "S",     "84": "T",     "85": "U",    
"86": "V",     "87": "W",     "88": "X",     "89": "Y",     "90": "Z",    
"91": "[",     "92": "\\",    "93": "]",     "94": "^",     "95": "_",    
"96": "`",     "97": "a",     "98": "b",     "99": "c",     "100": "d",    
"101": "e",    "102": "f",    "103": "g",    "104": "h",    "105": "i",    
"106": "j",    "107": "k",    "108": "l",    "109": "m",    "110": "n",    
"111": "o",    "112": "p",    "113": "q",    "114": "r",    "115": "s",    
"116": "t",    "117": "u",    "118": "v",    "119": "w",    "120": "x",    
"121": "y",    "122": "z",    "123": "{",    "124": "|",    "125": "}",    
"126": "~",    "127": ""
};

let findAsciiCode = function(str, index) {
   var charCode = str.split("")[index];
   return Object.keys(asciiCode).filter(function(item, i) {        [it returns an array so zeroth place contain the value]
      return charCode === asciiCode[item] && asciiCode[item] !== undefined;
   })[0];
};

var c = findAsciiCode(str, 1);
console.log(c); // return the 101 the value of e`







