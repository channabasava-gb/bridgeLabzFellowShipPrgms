/********************************************************************************************************************
 * @Execution : default node : cmd>palin_Deque.js
 * @Purpose : to study the functionals of palindome checker deque  are working.
 * @description :To read the string and add them to Deque, and check if they are palindrome.
 * @overview : returning whether the string is palindrome .
 * @author : channabasava <channabasavabml@gmail.com>
 * @version : 6.9.0
 * @since : 13-Nov-2019
 *******************************************************************************************************************/
let input = require('readline-sync')
let Str = input.question('Enter the string:')
let PD = require('../palindromeChecker/palindromeBl')
console.log(PD.PalinDeque(Str));