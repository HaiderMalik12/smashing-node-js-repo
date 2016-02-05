var fs=require('fs');

fs.readdir(__dirname,function(err,files){

    if(!files.length){
        console.log('There is no file in this Directory');
    }

    console.log('Select a directory or file you want to see');

    function readFile(index){

        var filename=files[index];

        fs.stat(__dirname+'/'+filename ,function(err,stat){

            if(stat.isDirectory()){
                console.log(index+' '+filename);
            }
            else{
                console.log(index + ' '+filename);
            }
            //check whether you have read all the files
            if(++index== files.length){
                process.stdout.write('Enter your choice');
                //take input from the user
                process.stdin.resume();

                process.stdin.setEncoding('utf8');
            }
            else{
                readFile(index);
            }

        });

    }
    readFile(0);
});