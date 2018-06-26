? What is closure
A closure is an inner function that has access to the outer (enclosing) function's variables—scope chain. There are scopr chain
> Own scope (variables defined between its curly brackets)
> Access to the outer function's variable
> Acces to the global variable
	function create() {
	   var counter = 0;
	   return {
	      increment: function() {
		 counter++;
	      },

	      print: function() {
		 console.log(counter);
	      }
	   }
	}
	var c = create();
	c.increment();
	c.print();

? Will javascript support the overloading or overridding?
JS doesnt support the overloading but support the overridding.


? How to check the type of variable in JS?
> Using `typeof` operator, we can check the `data type` of variable. In JavaScript we have only three kind of variable Number, String and boolean. However we have two more variable type `NULL` & `undefined`. 

How to create the custom object in JS?
	var athlete = new Object();

? Type of loop, which reterive the object properties when their name are unknown
	for ... in
	Syntax: 
	  for(<obj> in <main_obj>){
	    document.writeln(<main_obj>[<obj>]);
	  }

? How to create the prototype 
JS have `ptototype` keyword. which can be add the properties into the constructor function or else override the property value using the `object` of contructor.
Syntax: <name_of_object_or_constructor_function>.prototype.<userdefine_properties>
Ex. Car.prototype.color = 'red';

? Even though we can also create the prototype method using the `prototype` keyword
Syntax:
Ex 
	Car.prototype.reportInfo = function(){ //anonymous function
	   .... respected code ...
	}

? If we want to override the property of current define property then we need to do below process
	var honda = new Car("CRV", "4", "185"); // carete an object for constructor
	honda.color = 'blue'; //override the property value

? Calling the prototype method
	honda.reportInfo();

	function Car(model, numCylinder, horsepower){ /*constuctor function*/
	   this.model = model;
	   this.numCylinder = numCylinder;
	   this.horsepwoer = horsepower;
	 }
	 /*add the property using prototype*/
	 Car.prototype.color = 'red';

	 /*add the method using prototype*/
	 Car.prototype.reportInfo = function(){
	   document.write( ...)
	 }

	 var honda = new Car("CRV", "4", "185"); //create an object for constructor
	 honda.reportInfo(); 

? Inharitance [prototype chaining] & Extending the classes in JS


Note:
one suggestion, which should not do into the production code. If you use the `i < <var>.lenght` in directly to the for loop. In this case your loop go through the document object and parse the values in array and count it. It can be increase the resorce intensivity, if in your array has lots of values. So you need to declare the variable and initialize it.

Topic: 31/Jan/17
	Besic data type in JS
	Regular Expression
	SubSting & formatting the string
	Math & Date Object

? undefine & null variable:
	if you want to find or know the variable `type` then in JS has keyword call `typeof`.
	if you initialize the variable but not assign the value to it then it will trigger the `undefined` statement.
	ex.  var x;
	(typeof x === 'undefined')? 'undefined' : 'value ' + x + ';' + typeof x;

? How to create empty object in JS?
	var x = {};

? Regular Expression:
	literal Regular Exp (String variable) : /<string>/<modifier>
	Ex. re = /Sample/i
	Checking Methods in Reg Exp:
	re.exec(<string>); // it will return the exact variable value
	re.test(<string>); //true & false value

	Regular Exp as an object: new RegExp('<string>', 'modifier');

? Number formatting:
	num.toFixed(<dec_place>);
	num.toPrecision();
	num.toLocaleSring(); //to get the orignal value

? Date & Time object: t = new Date();
	t.toString(); //string rep of date object
	t.toGMTString();
	t.toUTCString();
	t.toLocaleDateString(); //return date accordning the geo location
	t.getDay();
	t.setYear();

? Boolean Object: b = new Boolean();
	Ex. c= Boolean(2>5); //false

? Working with Files:
	Working with XML files: xmlHttp = new XMLHttpRequest(); //object creation
	xmlHttp.open('GET/POST', 'URL', false/true); //method Asynchronus as per the (true & false)
	xmlHttp.send();
	xmlHttp.readyState / 
	xmlHttp.status
	xmlDom = xmlHttp.responseXML //get response from the dom object
	>>xmlDom.getElementByTag("<ele_name>")[<index_num>].childNodes[<index_num>].nodeValue;

? JS event:
	document.getElementById('ele_name').addEventListener('event_name [like click]', 'function_name', asynch (true/false));
	need to understand the `event`object like function_name(even);
	event.timeStamp;

=======================================================================================================================
Functions in jQuery

1. [selector].load() // When body will be load in browser
Syntax: $("#element").load();
Syntax: $("#element").load(URL, {action: "<value>"}, function(){
            alart("message");
        }
Syntax: $("#element").load(URL <jQuery_selector>, {action: "<value>"}, function(){
            alart("message");
        }

2. [selector].find("<elements>") //search the parent and child method
Syntax: $("#element").find("span").css( ... );

3.[selector].filter(":<selector>").parent().addClass("<value>");

Ex. $("input").filter(":checked").parent().addClass("red");
Ex. $("label input").parent().filter(function(i){
       if($(this).text().indexOf("o") > -1) //taking text from all and search the index value `o`
	  return true;
       else
	  return false;
    }).addClass("bord");

Ajax function:

$.ajax({
   type: "post/get",
   url: "myServerScript.php"
   async: false, // If you want that full page wait for server response and nothing will happen ( default = true)
   data: {
	action: "simple/wait" // wait: will be return the response after some wait
	message: msg
   },
   dataType: "xml" //script, xml, text, json will cause parsing error
   success: callback //it is function define by user only
   });

> If you wan add contain dynamically in web page 
	$("#element").append("value");

> $("#tab").tabs();

>working with remote data [ using JSON method]
>Selecting Descendant Elements:
+ sign denote the adjesent 
var item = $("h2 + div"); // it looks the element div next to h2 element, if it is not there then it will not work.
~ sign denote the sibling
var item = $("h2 ~ div"); // it looks h2 and search the div element in whole page

> Selector by other attribute:
var item = $("[name='sername']").val();
or
var item = $("[name]").val(); //it will return the values of those element, who contain the `name` attribute
or 
var item = $("input [name = 'sername']").val(); //it will effect all input element but filter `attribute` must sername.

>Selection via Pseudo selector
> Selecting children
var item = $('table').children(); //select all child elements
or 
var item = $('table').children('tbody'); //only select the tbody

===========================================================================10/Feb/17
[selector].filter(":<selector>").parent().addClass("<value>");

Ex. $("input").filter(":checked").parent().addClass("red");
Ex. $("label input").parent().filter(function(i){
       if($(this).text().indexOf("o") > -1) //taking text from all and search the index value `o`
	  return true;
       else
	  return false;
    }).addClass("bord");

Ajax function:
$.ajax({
   type: "post/get",
   url: "myServerScript.php"
   async: false, // If you want that full page wait for server response and nothing will happen ( default = true)
   data: {
	action: "simple/wait" // wait: will be return the response after some wait
	message: msg
   },
   dataType: "xml" //script, xml, text, json will cause parsing error
   success: callback //it is function define by user only
   });

> If you wan add contain dynamically in web page 
$("#element").append("value");

> $("#tab").tabs();

>working with remote data [ using JSON method]

>Selecting Descendant Elements:
+ sign denote the adjesent 
var item = $("h2 + div"); // it looks the element div next to h2 element, if it is not there then it will not work.
~ sign denote the sibling
var item = $("h2 ~ div"); // it looks h2 and search the div element in whole page

> Selector by other attribute:
var item = $("[name='sername']").val();
or
var item = $("[name]").val(); //it will return the values of those element, who contain the `name` attribute
or 
var item = $("input [name = 'sername']").val(); //it will effect all input element but filter `attribute` must sername.

>Selection via Pseudo selector
> Selecting children
var item = $('table').children(); //select all child elements
or 
var item = $('table').children('tbody'); //only select the tbody

Ajax
XMLHttpRequest() :: JS class
window.XMLHttpRequest();
ActiveXObject("Microsoft.XMLHTTP") :: JS class
window.ActiveXObject():

/*
major Points in Ajax
1. Initilization
2. Open
3. State Change
4. Ready state & status ==200
5. response & close

ajaxRequest = new XMLHttpRequest(); //initilization
ajaxRequest.open("<..method..>", "<..file_name.. like xml/html/php>", true); // Open
ajaxRequest.onreadystatechange = function(){ //state Change
  if(ajaxRequest.readyState == 4&& ajaxRequest.status == 200){ //ready state and status
     myXMLDoc = ajaxRequest.responseXML; //response
  }
}
*/

Note: 
ECMAScript such as JS & VB Script
Communication is only the one way - the browser always initiates the request to the server - this model called the synchronous model.
Four type of JS object,
1. Built-in-object [Math, Date & string etc],
2. Browser Object [object support by JS are called `host` objects. They handle the characteristic and properties of web browser. Window & History],
  >history object contain back/forward/go method and u can access it using `.` operator like history.back(3), so once you click on the back button it will be back 3 pages
  >location object contain href method to redirect the page on the specified the url like location.href = `example.html`
  >document.form("form_name");
  >navigator object, provide information about the client browser.
  >window.screen.height/availTop/.width/availLeft, window.moveTo(X, Y)

3. User-defined object [create your own object using built-in-object],
  > Create the user define object using `Object()` constructor
  > destructor function will be declare inside of the main function like 
  function abc(name, price){
    this.name = name;
    this.price = price;
    this.destroy = function(){ //this is the destructor of abc function or class
	delete this.name;
	delete this.price;
    }
  }
4. Document object


/*How to create the DOM object or element dynamically and add into body using JS*/
var newPara = document.createElement("p");
document.createTextnode("<message_values>");
document.body.appendChild(newPara);

/*IF you want to attached or detach the event in JS for IE */
elementObject.attachEvent('method_or_action', callback);
Ex. membershipDiv.attachedEvent('click', changehref);

elementObject.detachEvent('method_or_action', callback);
Ex. membershipDiv.detachEvent('click', changehref);

/*IF you want to attached or detach the event in JS in Mozila or other browser */
elementObject.addEventListener('Event_Name', 'Function_Name', true/false); //true or false for use in event capturing or bubbling  flow respectively
Ex. membershipDiv.addEventListener('click', changehref, false);
Ex. membershipDiv.removeEventListener('click', changehref, false); // to remove the added event


>You want to create object that helps you to navigate three pages forward whe nthe user click the right arrow in the browser? Ans:: history.farward(3);
> How can u distroy the javascript object? Ans:: create distructor (learn) object or using delete operator
> How can Ajax model work for the application? 
  Ans:: provide continuous interactive on web pages, update web page partially
> After the XMLHttpRequest object is created, the request body is constructed the code. How to construct the request body? Ans:: var 
> Open a POSt request on the XMLHttpRequest object. Request data is form -URl encoded? Ans:: ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

================================================================12/March/17
which of the following symobls is used to select a direct descendant of an element? Ans:: >
Which code statement search the area with ID content and select the list element with a child of an unnumbered list, which itself has child of a list element? var items = $("#content li ul li");

//How to dynamic color
var i = 0;
var colorArray = ['red','black','green','pink','white'];
var runner = window.setInterval(function(){
	$(".p1").css("background-color", colorArray[i]);
	i = (i + 1) % colorArray.lenght
},<set_time_interval>);

window.clearInterval(runner);

//Animation function
Syntax:: $("element").animate({<style_properties>},"slow", function(){ .... });

$("element").animate({height:'300px', opacity:'0.4'},"slow");
or
$("element").animate({
	height: "toggle",
	width: "toggle"
 }, {
 	duration: 5000,
 	specialEasting: {
 		width: "liner",
 		height: "swing"
 	}
 });

 $("element").finish(); // to finish the first ocurance and rest will work as similar
 $("element").stop(); // to pouse the animation for sometime and it will again start with the same position
 $("element").stop(true, true); //1st arg: clear the queue means all occurance, 2nd arg: it tells element to jump into last occurance
 $("element").clearQueue();
 
 $("element").slideUp();
 $("element").slideToggle(500);
 $("element").fadeOut().delay(500).slideDown(2000);

 Which function in jQuery is used to grab a previous sibling element? Ans:: $("element").prev();
 Which function is used to chain animation? Ans:: delay();
 Which function forces an animation to go to its end state? Ans:: $("element").finish();

1. Premitive[simple variable always premitive because it store the current data] 
2. Reference[array & object always create reference]

Ex. var a = {name: "vikas"}
	var b = {name: "bose"}

	output a {name: "bose"}

However 

	var a = {name: "vikas", age: "23"}
	/*first argument will be empty object, b will targetting it
	  a will be the container variable
	  last argument will be the replacement of object `name`
	*/ 
	var b = Object.assign({}, a, {name: "bose"})
	output b {name: "bose", age: "23"}
		   a {name: "vikas", age: "23"} // value of a didn't change, it is immutable

For Array, concat, filter
> Concat
	var a = [1,2,3]
	var b = a.concat(4)
	output a [1,2,3]
		   b [1,2,3,4]
> filter
	var a = [1,2,3]
	var b = a.filter((val) => val !== 2)
	output b [1,3]

another Example::
	var a = {name: "vikas", thing: [1,2,3]}
	var b = Object.assign({}, a, {name: "bose"})
	Now
	b.thing [1,2,3]
	if
	b.thing.push(4)
	then output b [1,2,3,4] and a [1,2,3,4] // mutable
So that
	var a = {name: "vikas", thing: [1,2,3]}
	var b = Object.assign({}, a, {name: "bose"})
	b.thing = a.thing.concat(4)
	output b [1,2,3,4]	& a [1,2,3]

Note: filter, map and reduce always return the brand new array and object

Other functions in jQuery
