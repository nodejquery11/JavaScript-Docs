Primitive Data:
1. String
2. Number
3. Boolean
4. Null [will have type object]
5. Undefined [will have type undefined]

Complex Data:
1. Function
2. Object
3. Array

Accessing the object properties:
	objectName.propertyName OR objectName[propertyName]

Local & Global Variable /Scope: Life of JS variable, when it is initilized.
In JS, scope is the set of variable, Object and function you have access to.
 - if you define the variable inside of function then variable scope must be inside of function. Local variable end once your function finish.
 - if you defien the variable outside of function then variable scope must be outside & inside of function. Global variable delete, when you close your browser.

/**String Functions:**/

var str = 'abcdefghijklmnop';
1. str.lenght; //output: 16
2. str.charAt(position_index) //output: a 	[it will return char of the string basis on the passing index]
3. str.toUpperCase();			  	[make full string into upper case
4. str.indexOf(value);			  	[return index value, if value present in string. return index number of first occurance of value/param]
    > str.indexOf(value, start_point)     	[it will start index from the given start_point]
5. str.lastIndexOf(value) 		  	[return the index values of last occurance]
6. str.slice(start_index, end_index/count_string) 
	   				  	[- extract a part of string and return the new string
	   				   	 - if start index -ve then it will indexing from end of string or else front of srting. However count_string will contain the number of char return.
	   				   	 - if you remove the second arg then it will display all value from start_index end.]
7. str.substring(start_index, count_string)	[similar to slice method]
9. str.substr(start_index, len_of_expacted_char) //
10.str.replace(source_str, target_str) 		[to replace the string value. If you want to make changes globally then pass /g.
						 - Ex. str.replace(/microsoft/g, 'w3s');]
11.str.toLowerCase(); 				[make full string into lower case]
12.str.concat(delimiter, sec_str); 		[concat two string with delimiter[/, _, '']
13.str.charCodeAt(position_index) 		[it will return the ascii code basis of index value]
14.str.fromCharCode(indexNumber);  		[it will return the char value basis of ascii code]
var str2 = "a,b,c,d,e,f";
15.str2.split(delimiter) 			[it will extract string with the help of delimiter and return array. But if the delimiter not match then it will return the same string. But empty argument will return the expacted value.]
16.str.includes(value);  			[it will return the boolean value if the value exist in the string]
17.str.match(str); 				[it will return you exeact maching string, it is also follow the case sensitivness]
18.str.repeat(val); 				[it will create the copy of parent string basis of passing argment]
19.str.search(val); 				[it will return the index value, where the string is]
20.str.toString();
21.str.valueOf();                     		[to return the exeact value]

/**Number Functions:**/
var num = 128;
1. If you want to convert the decimal to Hex, Octal or binalry then you can update using toSting(16)
	- num.toString(16); 			[convert decimal to Hex decimal]
	- num.toString(8); 			[convert decimal to Octal]
2. `Infinity` key word, to check the number either goes to infinity or not
3. num.toExponential(num_position); 		[to display the exponential value and using the number of position after decimal]
4. num.toFixed(num_position); 			[to fix the decimal value as per the num_position]
5. num.valueOf() 				[It will convert the number object to primitive number internally]
6. Global Methods in Number
	- Number() 				[to convert variable into number]
	- parseInt(10) 				[to return the decimal value]
	- parseFloat(10) 			[to return the float value of decimal variable]

# Math Functions:
var value = 4.7;
var series = '0, 150, 30, 20, -8, -200';
1. Math.round(value); // output: 5 		[if after decimal value more then 5 then it will convert it and +1 in main value]
2. Math.pow(8, 2); //output: 64
3. Math.sqrt(64); //output: 8
4. Math.abs('-'+value); 			[return the positive value]
5. Math.ceil(4.4); //output: 5 			[it will add 1 into main number even it is less then 5]
6. Math.min(series) 				[find the min value of amoung all]
7. Math.max(series) 				[find the max value of amoung all]
8. math.random(); 				[return the random number 0 to 1]

Date Functions:
var a = New Date(); 				[Pre-define object method & it is static object]
1. d.toUTCString(); 				[method converts a date to a UTC string (a date display standard).]
2. d.getTime(); 				[return the milisecond since 1 Jan 1970]
3. d.getDay(); 					[return the current day as number]
4. d.getDate()					[return the current date]
5. d.getFullYear(); 				[return the four digit year]
6. d.getMonth(); 				[return the month value]

# Array Functions:
var f = ["Banana", "Orange", "Apple", "Mango"];
1. f.length //return number 4
2. f.push('value') 				[insert the value at end, for single value can be insert using f[5] = 'value']
3. Array.isArray(f); 				[to return the boolean value, if `f` will array then return true]
4. f.toString() 				[convert obj or array into string]
5. f.join(delimiter); 				[join `delimiter` into the array elements]
6. f.pop(); 					[to remove the value from end]
7. f.shift(); 					[remove first element from array]
8. f.unshift(); 				[add new element into array in first index]
9. f.splice(add_num_element, removing_element, elem_val1, elem_val2 ...); // to add or remove the element basis of first two arg.
10.f.concat(arr1, arr2, ...); 			[concat arr1, arr2 values into first or main array.]
11.f.slice(start_index, dispaly_val_position);
12.delete <array_value> 			[It will delete the perticular value]
13.arr.splice(index, 1);			[It will also do the same like `delete]

Note:
$ Dont declare String, Number and Boolean as Object. Whenever you decalre variable with `New` keyword, it become an object.
$ In HTML, the global scope is the `window` object. All global variables belong to the window object.
	- your global variable can overwrite window varaible. Any function or variable include the window (window.func_name) object, can overwrite your global variable and function.
$ new String(<value>); // convert pram into string, but type will be object {drawback:: it slows down your execution speed}
$ JS is case-sensitive, so if you pass different cases argument then it will not work and throw an error. Like var n = str.replace("MICROSOFT", "W3Schools");
$ Formally strings are immutable, it cant change only replaced.
$ JS numbers always 64bit floating point
$ using new Number(value), you can make any value as number. type of will be object
$ If you want to convert the valid string into milisecond then use Date.parse(pass_full_date);
