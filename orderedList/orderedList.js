/********************************************************************
* @Execution    : node orderedLinkedList.js
* @description  : Using linked list, save data in ordered List
* @Purpose      : OrderedLinked List
* @function     : Utility/linkedList
* @file         : orderedLinkedList
* @author       : channabasava <channabasavabmlgmail.com>
* @version      : v6.9.0
* @since        : 13-Nov-2019
*
*********************************************************************/
try{
    let sc = require('readline-sync');
    const ls = require('../../dataStructure/utility/linkedList');
    const util = require('../../dataStructure/Utility1/utility');
    var data = util.fileCall('file.txt');
    
    
    var linklist = new ls.LinkedList();
    
    data.forEach(element => {
        linklist.sortedInsert(parseInt(element));
    });
    
    var display = linklist.show();
    console.log(display.join(' '));
    
    util.writeFile('file.txt', display)
    
    let find = sc.question("enter the number you want check");
    var check = linklist.search(find);
    if (check) {
        linklist.removeElement(find);
    }
    else {
        linklist.sortedInsert(find);
    }
    //linkedList.sortedInsert();
    var display = linklist.show();
    console.log(display.join(' '));
    
    util.writeFile('file.txt', display)
    }
    catch(e)
    {
        console.log(e.message);
        console.log(e.name);
    }