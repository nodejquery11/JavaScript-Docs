#Type Scrip: 
This script is identifing the type of variable, if the variable type will not match with the exact argument then it throws an error and an error as follows
`main.ts(1,5): error TS2322: Type '"Hello World"' is not assignable to type 'number'.`
var message:number = "vikas bose"
Benifits:
    1.strong type checking
    2.compile time error check and success the JS in full enterprise edition
    3.JavaScript is typeScript, it means that JS might change into *.ts and complied in typeScript.
    4.Compilation Error: as JS is interpretor lanaguage but using TypeScript, you can compile the code and generate the compiler error with sort of compile error discription.
    5.component of TS: langauge -> TS compiler ->langauge service. once it done, it creates declaration file with extension *.d.ts and it will support all the library.
Decalration variable in TS:
  var <var_name>:<data_type> = <var_value>;
TS variable scope: there are three kind of var scope
1.Global []
2.Class
3.local

Example:-
var Greeting = /** @class */ (function () { //*.js
    function Greeting() {
    }
    Greeting.prototype.greet = function () {
        console.log("Hello World!!!");
    };
    return Greeting;
}());
var obj = new Greeting();
obj.greet();

class Greeting { //*.ts
   greet():void { 
      console.log("Hello World!!!") 
   } 
} 
var obj = new Greeting(); 
obj.greet();

#ES6: ES6 will work once you install the babel in your application. 
Triple dot (spread operator): it will sparated the multiple passing argument using some mechnizam. Passing argument must be an immutable array or object.
Example: let a = [1, 2, 3];
let fun = function(...a) {
  console.log(arg); //1, 2, 3
}
#In simple JS instead of triple dot, we use arguments(default key). It also take the all argument, which pass on the calling function.
#there are multiple kind of parameters 
    1. optional parameter [if parameter will not required then we mentioned parameter using `?:<dataType>`]
      var a = function(arg:string, arg1: number, ard2?:string) { ....... statement}
    2. Rest parameter [if we pass the miltiple argument or array or object into function then we use spread operate]
    3. Default parameter [if you want to set any default value to the argument, even after if user run the code but not provide the parameter]
      var a = function(arg:string, arg1: number, ard2:string=default_val) { ....... statement}
