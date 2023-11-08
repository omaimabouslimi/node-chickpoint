const fs = require('fs')
const generatPassword = require ('generate-password')
var pwd = generatPassword.generate({
    length:6 ,
    uppercase : true ,

})
console.log(pwd)
fs.writeFile('welcome.txt', pwd , (err)=>{
 if(err){
    console.log(err)
 }
})