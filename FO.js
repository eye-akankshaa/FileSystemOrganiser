//1. First Activity with Node.js
// We will be creating a File System Organizer

//Features of the Project -
//If you have numerous Files in a folder and they are not Properly arranged
//So you can use this tool to arrange them in specific directory according to their extension
// like text files will go into text File Folder .exe files will go into application folder and so on
// so at the end you will have a arranged set of files in specific folders
// we will be using built in node modules like fs and path to  create this project

// array ke from mein input jaata hai command line pein
// node js treats command line inputs as ARRAY and that array is your PROCESS ARRAY
// let input=process.argv[2]//cmd is teated like array--of 4 length
// console.log(input)


const fs=require('fs')
const path=require('path')
const helpObj= require('./commands/help') //imported helpFunction/Script
const TreeObj=require('./commands/tree')   //imported treeFunction/Script
//const {organizeFnKey}=require('./commands/organize')//imported organizeFunction/Script
const OrganizeObj=require('./commands/organize')

let inputArr=process.argv.slice(2)//slice is used to extract the commands and path we have passed
//console.log(inputArr)--->the command which we type is teated as an array an then we apply slice func--(length of array is 4)
//0 1 2 3 node FO.js organize pathname--2 n 3 it will take out just like substring fn and put it into new array
//Here path name is the folder which u have to organize

let command=inputArr[0]//organize,help,tree,default
//console.log(command)


switch(command){
    case 'tree':
         TreeObj.treeFnKey(inputArr[1])
         break
    case 'organize':
         //organizeFnKey(inputArr[1])//Another way of organize fn calling and passing the path using organize fn key value
         OrganizeObj.organizeFnKey(inputArr[1])
          break
    case 'help':
         helpObj.helpFnKey()
         break      
    default:
    console.log('PLEASE ENTER A VALID COMMAND')
    break          
}




   


