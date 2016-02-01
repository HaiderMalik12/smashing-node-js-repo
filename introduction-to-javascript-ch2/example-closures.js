/*
-In javascript every time a function is called ,
new scope is defined
-because variables define within this scope
-inner scope means that is scope defined within that scope
-when your goal is to define a new scope you could call annomoys
function as a self invoked
 */
var a=5;
function woot(){
    a ==5;

    var a=6;

    function test(){
        console.log(a==6); //true
    }
    test();
}

woot();
//public variables
var a=3;

//these functions are good when you want to declare private variables

(function(){
    var a=5;
})();

console.log(a==3); //true