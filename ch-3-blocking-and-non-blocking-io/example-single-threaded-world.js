/*
-Node uses a single thread of an application
-Event Loop is the foundation of all the IO in Node
-If a timeout can be delayed so can incomming HTTp request
-or other form of IO/
-Asynchronously
-How Node is efficient?
-when v8 first calls a function .it starts what is known as call stack
 -function a(){
 b();
 }
 -function b(){};
 -V8 i sgood for executing non blocking code
 -
 */

var start=Date.now();

setTimeout(function(){

    console.log(Date.now()-start);
    for(var i=0;i<1000000000;i++){

    }
},1000);

setTimeout(function(){
    console.log(Date.now()-start);
},2000);