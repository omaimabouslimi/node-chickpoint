const fs = require("fs");

fs.readFile('welcome.txt',   (err,data)=>
{
 if(err){
    console.log(err)
 }
 console.log(data.toString())
}
)