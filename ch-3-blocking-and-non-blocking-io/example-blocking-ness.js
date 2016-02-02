/*
-
-
- print('hello')
 sleep(5)
- print('World');
-
-Php sleeps block the thread of an execution
-Programm is sleeping it is not doing anything
-


 */

/*
-on the other hand setTimeOut is non-blocking
-How node executes this node?`
-setTimeOut insted of blocking just registers an event for the future
-and lets the program continue to run asynchronous
-Node loop triggers notofictaion when the timeout is complete
-file dispatcher
 */

setTimeout(function(){
    console.log('World');
},2000);

console.log('Hello');
