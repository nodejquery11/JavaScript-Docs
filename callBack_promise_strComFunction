** callback **
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
 
 ** Promise in JS: **
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

** Common string function (IMP) **

a. str.charAt(indexNumber);           [it will return char of the string basis on the passing index]
b. str.charCodeAt(indexNumber);       [it will return the ascii code basis of index value]
c. str.concat(str2);                  [join two or more strings]
d. str.fromCharCode(indexNumber);     [it will return the char value basis of ascii code]
e. str.includes(value);               [it will return the boolean value if the value exist in the string]
f. str.indexOf();                     [if it will return the posivie value then searching value is exist or else not]
g. str.match(str);                    [it will return you exeact maching string, it is also follow the case sensitivness]
h. str.repeat(val);                   [it will create the copy of parent string basis of passing argment]
i. str.replace(replaceString);        [it will replace the current value using pass arg]
j. str.search(val);                   [it will return the index value, where the string is]
k. str.split();                       [to split the string either obj or array]
l. str.slice(startIndex, sliceIndex); [it will return the string basis of both argument]
m. str.toLowerCase() & str.toUpperCase & str.toString()
n. str.valueOf();                     [to return the exeact value]






	
