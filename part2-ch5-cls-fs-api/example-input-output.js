
/**
 * Module dependencies.
 */

var fs = require('fs');

fs.readdir(__dirname, function (err, files) {

    console.log('');

     //if the files array is empty
    //display the text in red color
    if (!files.length) {
        return console.log('    \033[31m No files to show!\033[39m\n');
    }

    console.log('   Select which file or directory you want to see\n');

    //executed for each member  of the array
    //
    function file(i) {

        var filename = files[i];
        //gives the meta data about the directory or file
        fs.stat(__dirname + '/' + filename, function (err, stat) {

            //if the path is directory you want to print it in a different color from files
            if (stat.isDirectory()) {
                console.log('     '+ i +'   \033[36m' + filename + '/\033[39m');
            }

            else {
                console.log('     '+ i +'   \033[90m' + filename + '\033[39m');
            }
            //check whether you have any files left or not?
            if (++i == files.length) {
                console.log('');
                process.stdout.write('   \033[33mEnter your choice: \033[39m');
                //request input from the user
                process.stdin.resume();
                //support special characters
                process.stdin.setEncoding('utf8');
            } else {
                //if there is a file to process call again this function
                file(i);
            }
        });
    }

    file(0);

});
