/**
 * @description : To check if the parentheses arte balanced.
 * @param {exp}, expression
 * @return {boolean }, returning true or false.
 */
BalParentheses = exp => {
  const Stk = require("../utility/stackBalanced");
  array = exp.toString().split("");
  let Stack1 = new Stk.Stack();
  array.forEach(element => {
    if (element == "(" || element == "[" || element == "{") {
      Stack1.push(element);
    } else if (element == ")" && Stack1.top.data == "(") {
      Stack1.pop();
    } else if (element == "]" && Stack1.top.data == "[") {
      Stack1.pop();
    } else if (element == "}" && Stack1.top.data == "{") {
      Stack1.pop();
    }
  });
  Stack1.isEmpty();
  if (Stack1.size === 0) {
    console.log("The Parentheses are Perfectly Balanced!");
  } else {
    console.log("The parentheses are Not Balanced");
  }
};
module.exports = {
  BalParentheses
};
