/*

-They are first class
-They can be stored in variables as a reference
-and then you can this variables to an object

 */

var a= function () {
    //passing the function as a paramter
    console.log(a);
}
//a will have the reference of this anonymous function
a();

var result=function sumOfTowNumbers(a ,b){

    return a+b;
}
//result will have the reference of this anonymous function

console.log(result(10,15));