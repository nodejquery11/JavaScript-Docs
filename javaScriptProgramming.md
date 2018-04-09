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

/* increment count down*/
var countD = (num) => {
  if (num >= 11) return;
  console.log(num);
  countD(num + 1);
};

countD(1);
