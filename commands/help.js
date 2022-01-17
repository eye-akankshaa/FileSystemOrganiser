const fs=require('fs')
const path=require('path')
function helpFn(){
    console.log(`List of all the commands-
                 1)Tree Command-node FO.js tree<dirName>         
                 2)Organize-node FO.js organize <dirNmae> 
                 3)Help-node FO.js help`)//Backticks ar used for multiple lines single'' and " " will give ERROR
        }
 module.exports={
     helpFnKey:helpFn
 }       