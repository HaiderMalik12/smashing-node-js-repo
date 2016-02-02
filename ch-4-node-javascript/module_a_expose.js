
//public variables anyone can access it
exports.name='Jhon';
exports.data='this is some data';

//private variables
var privateVariable =5;

//something like an encapsulation
exports.getPrivate=function(){
    return privateVariable;
}