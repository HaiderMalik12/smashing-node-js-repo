/*
-
-In this case exports happens to be a reference to a module.exports
-module.exports is an object be default
-
-
-
 */

var a=require('./module_a_expose');
var Person=require('./person');

var jhon=new Person('jhon');
jhon.talk();

var haider=new Person('haider','LHR','House no 5A-Block GM Abad',1000.0);
haider.talk();

console.log(haider);

//access the public fields of module a
console.log(a.name);
console.log(a.data);
//access the private field of module a using public method
console.log(a.getPrivate());

