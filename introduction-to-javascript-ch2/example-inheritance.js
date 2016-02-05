//parent class
function ParentClass(){
    this.parentProperty1='Parent';
    this.parentMethod=function(arg1){
        return arg1+' Parent methos 1 return data ...  ';
    }
}

//child class
function ChildClass(){
    this.childProperty1='Child';
    this.childMethod=function(arg1){
        return arg1+' Child methods 1 return data ...  ';
    }
}
//make child inherit the properties of parent class

ChildClass.prototype=new ParentClass();

var instance1= new ChildClass();;

//override the parent class method
 ChildClass.prototype.parentMethod=function(arg1){
    return arg1 +'This is from overridedn method in child class';
}

//access the properties of parent and child class
console.log((instance1 instanceof ParentClass));
console.log(instance1 instanceof  ChildClass);

console.log(instance1.parentMethod('Hello '));
console.log(instance1.childMethod('Hello '));
console.log(instance1.parentProperty1);
console.log(instance1.childProperty1);

console.log(instance1.parentMethod('Hey'));