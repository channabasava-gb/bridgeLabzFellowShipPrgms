/********************************************************************************************************************
 * @Execution : default node : cmd> arrayCal.js
 * @Purpose : to study the Simple Balanced Parentheses.
 * @description :To print the parentheses. balanced or not.
 * @overview : parentheses are used to order the performance of operations.
 * Ensure parentheses must appear in a balanced fashion.
 * @author : channabasava <channabasavabml@gmail.com>
 * @version : 6.9.0
 * @since : 13-Nov-2019
 *******************************************************************************************************************/
const BalPar = require("./balancedBl");
let input = require("readline-sync");
let exp = input.question("Enter the expression: ");
BalPar.BalParentheses(exp);
