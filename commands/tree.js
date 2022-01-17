const fs=require('fs')
const path=require('path')
//This tree fn has no alag s difft role than just to display properly  all the foldrs on Console....This is Only written
//for efficient Dispaly 
function treeFn(dirpath){
    if(dirpath == undefined){
        console.log("Please enter a valid Path")
    }
    else{
        let doesExist=fs.existsSync(dirpath)
        if(doesExist){
            treeHelper(dirpath ," └──")
        }
    }

}
function treeHelper(dirpath,indent){
   let isFile = fs.lstatSync(dirpath).isFile()
   
   if(isFile==true){
       let fileName = path.basename(dirpath)
       console.log(indent +"├──" +fileName)
   }
   
   else{
       let dirName= path.basename(dirpath)
       console.log(indent +" "+ dirName)

       let children=fs.readdirSync(dirpath)
       
       for(let i=0;i<children.length;i++){
           let childPath=path.join(dirpath,children[i])
             treeHelper(childPath,indent+'\t')
       }

    }
} 
    module.exports = {
        treeFnKey:treeFn //Kisi ek hi function ka refernce diya baki k sare khud call hojayenge--ek dusre func s
    }
