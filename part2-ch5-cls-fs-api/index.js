/*
-you can make both blocking and non blocking calss
with this api
-You can handle more concurency in one thread
-fs module has synchronous and asynchronous methods
-for accessing the files system
-
Module Dpendencies
 */
var fs=require('fs');

//get the list of present directory
//this is synchrouns approach
console.log(require('fs').readdirSync(__dirname));

//get the list of parent directory using asycnhronus way
function async(err,files){
    console.log(files);
}
require('fs').readdir('.',async);

//read directory of files using asycnhronus way
fs.readdir(__dirname,function(err,files){
   console.log(files);
});