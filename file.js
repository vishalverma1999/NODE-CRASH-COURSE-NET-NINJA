const fs = require('fs');   // fs -> file system

// reading files
// 1st argument-  this is an relative path --> './blogs/blog.txt' 
// 2nd argument - callback function
// fs.readFile('./blogs/blog1.txt', (err, data)=>{     // asynchronously kaam karega, b/c file ko read karne mein kuch time lagega aur jaise hi file read ho jayegi callback function fire ho jayega with two parameters 'err' and 'data'
//     if(err)
//     {
//         console.log(err);
//     }
//     console.log("buffer format-->", data);     // returns the data in buffer format
//     console.log("String format-->", data.toString());    // converting buffer format to string format
// })

// console.log("last line executed first, b/c readfile is asynchronous function, so while it's taking some time to read file, code below it will execute");

// _______________________-----------------------------/////////////////++++++++++--------------=========

// writting files
fs.writeFile('./blogs/blog1.txt', 'hello, world', ()=>{    // existing text in blog1 will replaced with 'hello,world'
    console.log("file was written");
})

// creating new file, which already does not exist
fs.writeFile('./blogs/blog2.txt', 'hello, again', ()=>{    // existing text in blog1 will replaced with 'hello,world'
    console.log("file was written");
})

// directories
// first check if xyz folder exists or not, if not then only create it, b/c if a folder already exists and u try to create it using fs.mkdir, then it will throw an error
if(!fs.existsSync('./assets')){      // existsSync() --> synchronous function
    fs.mkdir('./assets', (err)=>{     // fs.mkdir()--> is again asynchronous function, so it will take some time to build the folder.After done creating run callback function
        // './assets'  --> create assets folder in current directory
        if(err){
            console.log(err)
        }
        console.log('folder created successfully');
    })
}
else
{
    // deleting folder
    fs.rmdir('./assets', (err)=>{
        if(err){
            console.log(err);
        }
        console.log('folder deleted');
    })
}

// deleting files
// first checking if the file that we want to delete exists, if yes the fuck the file
if(fs.existsSync('./blogs/deleteme.txt')){
    // deleting the file
    fs.unlink('./blogs/deleteme.txt', (err)=>{
        console.log('file deleted');
    })
}