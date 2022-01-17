const fs = require('fs')
const path = require('path')
let types = {
    media: ["mp4", "mkv","mp3","jpg","png","gif","jpeg"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}
//The folder which we have to organize its path is passed as dirpath 
function organizeFn(dirpath) {
    // input of a directory path and making OrganizeFile Directory 
    let destPath;
    
    if (dirpath == undefined) {
        console.log('Please enter a Directory Path');
        return;
    } else {
        let doesExist = fs.existsSync(dirpath)//checking the directory path by giving true or false
        
        if (doesExist == true) {
            
            destPath = path.join(dirpath, "organized_files");
            //D:\MCA\WEBDEVFJP2\JAVASCRIPT\Testfolder\organized_files

            if (fs.existsSync(destPath) == false) {
                fs.mkdirSync(destPath);//creating Organized Files Directory
            }
            else {
                console.log('The File Already Exists')
            }
            organizeHelper(dirpath,destPath)
        }
        else {
            console.log('Enter a valid Path')
        }

    }

}

//src=TestfolderPath  dest=organizeFolder in Testfolder ka path
 function organizeHelper(src, dest) {
  // console.log("src=",src)
   let childNames = fs.readdirSync(src)//content of testfolder organised Alphabetical order
     // console.log(childNames)
   //console.log("length"+childNames.length)

    for (let i = 0; i < childNames.length; i++) {
        let childAddress = path.join(src, childNames[i])//Refering to a particular file in a testfolder
        let isFile = fs.lstatSync(childAddress).isFile();//Checking whether that content is a file or a directory
      // console.log(isFile)
        
        //getCategory m jayega hi tb jab  file fn true hoga..jaise organised_folder uss time bnchuka hoga testfolder m--ie
        //but it will ignore that hence isFile fn dena is Compulsory
        //Organize folder k liye it will give false and ignore 

        if (isFile == true) {
           
            let fileCategory = getCategory(childNames[i]);//Function call to getCategory method
            //childNames[i] means Testfolder contents
           // console.log(childNames[i] + "copied to" + fileCategory)//This is written just to show on screen for user
            let cpath=path.join(dest,childNames[i])//for eg--organize folder m anydesk.exe ka path
            //console.log("cpath=",cpath)
            //console.log('dest=',dest)
            sendFiles(childAddress,dest,fileCategory)
        }   
         //childaddress-->a file in testFolder
         //dest-->location of organize folder
         //fileCategory-->a particulr file Type--app,media,archives,documents   
    }
 }

// //used for getting the category through extention names
 function getCategory(name) {
     let ext = path.extname(name)//extract extention name inbuilt method in path module
    // console.log("dotwali purani" + ext)   //  (Now here it will have .extension--for eg--> .pdf,.exe etc)
    
     ext = ext.slice(1)//removing dot from .pdf--here size of our array is 2
    // console.log("binaDotwaliUpdated" + ext)

//Now using For in loops for objects
//here type stands for keys and types is the name of object
    for (let type in types) {
        let cTypeArr = types[type];//output-->media--k corresponding array
                                            // archives k corresponding array
                                            //documents k corresponding arary
                                            //app k corresponding array
        // console.log( cTypeArr)             
       // console.log( cTypeArr.length)
    

    for (let i = 0; i < cTypeArr.length; i++) {   //Nested Loop--Har ek key value k corresponding respective array ko match krega
        if (ext == cTypeArr[i]) {
            return type//(returning that particular key value)
        }
        //return 'others' //and agar hmare type wali key match ni krti to return 'others' folder 
 }
 //return 'others' //and agar hmare type wali key match ni krti to return 'others' folder 
}
return 'others' //and agar hmare type wali key match ni krti to return 'others' folder 
 }

 

 function sendFiles(srcFilePath, dest, fileCategory) {
    let catPath = path.join(dest, fileCategory)//organize folder k andar a particular extension
    console.log("catPath"+catPath)
    console.log(fileCategory)
    if (fs.existsSync(catPath) == false) {
        fs.mkdirSync(catPath)
    }

    let fileName = path.basename(srcFilePath)
    let destFilePath = path.join(catPath, fileName)
    fs.copyFileSync(srcFilePath, destFilePath)
    fs.unlinkSync(srcFilePath)

     console.log(fileName + " copied to " + fileCategory)
  }
module.exports = {
    organizeFnKey: organizeFn
}       