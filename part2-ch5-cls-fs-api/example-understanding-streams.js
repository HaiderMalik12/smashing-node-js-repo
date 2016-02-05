/*
-what console.log does?
-It writes to the stdout stream the string that you supply
-follwed by new line /n charcter
-process global contains the three streams Object
-stdin Standard Input
-stdout Standar Output
-stderr Standard Error
-stdin is a readable streams
-stdout and stderr is a writeable streams
-Stream object is a basic building block like EventEmittor
- TCP or HTTP sockets use this streams
-When reading or writing data profressively is invloved,streams are involved

 */

console.log('Hello World');


process.stdout.write('Hello World');


//stdin -> program
//stdout -> display
//stderr -> display

