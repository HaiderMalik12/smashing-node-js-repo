/*
-In Javascript there is no class keyword
-A class is defined like a function
-To define a method on all the instances of Animal
that you create ,you set it on the prototype
 */

//define a class
function Animal(name){
    this.name=name;
}

Animal.prototype.getName=function(){
    return this.name;
}

var animal=new Animal('Dog');
console.log(animal.getName());