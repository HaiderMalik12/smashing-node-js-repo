/*
-
-
-
-
-
-
-
 */

module.exports=Person;

function Person(name,city,address,credit){
    this.name=name;
    this.city=city;
    this.address=address;
    this.credit=credit;
}
Person.prototype.talk=function(){
    console.log('My Name is '+this.name);
};