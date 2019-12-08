/********************************************************************
* @Execution    : default node : cmd>palin_Deque.js
* @description  : simulate banking cash counter using queue
* @Purpose      : banking Cash Counter
* @file         : bankCashCounter
* @author       : channabasava <channabasavabml@gmail.com>
* @version      : 6.9.0
* @since        : 13-Nov-2019
*
*********************************************************************/

const refernce=require('../../dataStructure/bankCashCounter/banksCashBl');
const sc=require('readline-sync');
let bal=parseInt(100);
let n=sc.question("enter the no of customer");
refernce.banking(bal,n);