/**callback**/

As we know that javascript is even driven programming lanagage. So once the even will happen then it will return some output. 
Sometime the output might be usefull for another events. So we create the saparate function and we call those function inside 
of one script. It is call modularization but JS give us the ability to pass the function as argument and utlize the parent 
function or value as input for next function till it will not get sucess result. So this is call `callBack`.

let loadScript = function(src, cb) {
	let script = document.createElement('script');
	script.src = src;
	script.onload = function() {
		 cb(script);
	}
	document.head.append(script);
};
loadScript('/js/main.js', function(d){
	 console.log(d);
});

 multiple cllbacks: It is the procedure, where we call one after another callback, if sucess. 
 loadScript('/js/main.js', function(d) {
 	  console.log('...code..');
		loadScript('/js/main2.js', function(d) {
			 console.log('...code2..');
		});
 });
 Note: in callback we know with we will do with the output/result. And there can be only one call back.
 
 /**Promise in JS:**/
 
 Promise is the altranate of callback. As callback working as sequencial term but Promise work as parale so it is more efficeant. 
 Because it works also single thread but it does not wait for response or not dependent on the parent resultent.
 
 let loadScript = new Promise(function(resolve, reject) {
   setTimeout(function(){
   	resolve('done');
   }, 3000);
 });
 these two argument `resolve` and `reject` predefined function and developer no need to create it. JS compiler engine work for it. But
 in these both method only one execute at a time.
Note: in promise, we thing for natural order to create the code. So fist we run main function and `.then` we think about the next 
method like or result. `.then` can we use multiple times.

/**sort and remove duplicate from array**/
// using callback
Stpes of call back:
1. create function or method, which call as a callback
2. define method or function, where you can call the callback
3. execute the method or function with callback as argument

let mainArr = [12, 4, 6, 8, 1, 10, 11, 9, 7, 6, 1, 5, 2];
var temp = [];
step1:
var sorting = function(mainArr) {
  for(var i = 0; i < mainArr.length; i++) {
    for(var j = 0; j < mainArr.length; j++) {
      if(mainArr[j] > mainArr[j+1]) {
        temp = mainArr[j];
        mainArr[j] = mainArr[j+1];
        mainArr[j+1] = temp;
      }
    }
  }
  return mainArr;
}
step2:
var sortAndRemoveDup = function (input, callback) {
  callback(input);
}
step3:
sortAndRemoveDup(mainArr, sorting);

/** ================================================================================================= **/
'use strict';

// Normal way JavaScript:

let mainArr = [12, 4, 6, 8, 1, 10, 11, 9, 7, 6, 1, 5, 2];
var temp = [];
var removeDup = [];

//Sort the array values
for(var i = 0; i < mainArr.length; i++) {
  for(var j = 0; j < mainArr.length; j++) {
    if(mainArr[j] > mainArr[j+1]) {
      temp = mainArr[j];
      mainArr[j] = mainArr[j+1];
      mainArr[j+1] = temp;
    }
  }
}
console.log(mainArr);

/* remove duplicates from sorted array. There are two way to remove duplicats from array
1. delete [keyword]: delete array[index];
2. splice() [function]: splice(index, 1);

  var index = array.indexOf(value);
      splice(index, 1);
*/

for(var k = 0; k < mainArr.length; k++) {
  if(mainArr[k] === mainArr[k+1]) {
    delete mainArr[k+1];
  }
  if(mainArr[k] !== undefined){
    removeDup.push(mainArr[k]);
  }  
}
console.log(removeDup);	

/**Chaning in JS [https://schier.co/blog/2013/11/14/method-chaining-in-javascript.html]**/

// define the empty class
var fullName = function () {}
// define prototype
fullName.prototype.setName = function (name) {
  this.name = name;
  return this;
}
fullName.prototype.setSurname = function (lastName) {
  this.surname = lastName;
  return this;
}
fullName.prototype.save = function() {
  console.log (this.name +'=='+ this.surname);
}

// create an object of empty class
var x = new fullName();
x.setName('vikas')
  .setSurname('Bose')
  .save();

IMP note: if you try to write an normal prototype function and use chain then it will return an error into second function that `uncought error: property not defined or undefined`. To resolve this issue we need to send or return the output to the main object. So every prototype musy send the return the value.

