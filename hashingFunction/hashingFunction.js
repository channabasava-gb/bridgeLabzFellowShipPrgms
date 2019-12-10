/********************************************************************
* @Execution    : node hashingFunction.js
* @description  : hashing function to store the key element
* @Purpose      :  Hashing Function to search a Number in a slot 
* @file         : hashing
* @author       : channabasava <channabasavabml@gmail.com>
* @version      : v6.9.0
* @since        : 13-Nov-2019
*
*********************************************************************/

const read = require('readline-sync');
const fs = require('fs');

const file = require('../../bridgeLabzFellowShipPrgms/Utility1/utility');

const linkedlist = require('../../bridgeLabzFellowShipPrgms/utility/linkedList');

var obj = [];
var a = [];
//create the 10 slot to store the key value
for (let i = 0; i <= 10; i++) {
    obj[i] = new linkedlist.LinkedList();
}
//used to accept the input from file
let file1 = fs.readFileSync('file.txt');
let b = file1.toString();
let s1 = b.split(" ");
console.log("s1-->", s1);
s1.forEach(element => {
    var key = parseInt(element % 11);
    obj[key].insert(element);
});

obj.forEach((element) => {
    console.log(element.show());
});
//search the element from file and add if not found delete if found
var number = read.question('enter number to search-->');
var key1 = parseInt(number % 11);
if (obj[key1].search(number))
    obj[key1].removeElement(number);
else
    obj[key1].insertEnd(number);

obj.forEach((element) => {
    a = a.concat(element.show());
});
console.log(a);
file.writeFile('file.txt', a);