/*
-Node main Module system hota ha
-http ,net ,fs there are all modules
-require
-module
--exports
-Absolute and relative modules
-Absolute matlab node nay pahle se include karaye hain
-node_modules directotry
-lik fs and http
-you just need to write the require('http');
-
--
-
-
-

-
 */

var fs=require('fs');
fs.readFile(__dirname+'/ch4-node-javascript/readme.txt',function(err,contents){
    if(err){
        console.log('Unable to read the file');
    }
    else{
        console.log(contents);
    }
})