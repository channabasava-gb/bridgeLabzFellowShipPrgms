/**
 * @description :palindromChecker
 * @param {string}
 * @return to check the given string is palindromeor not
  */
 PalinDeque = (Str) => {
    const dq = require('../utility/deque')
    console.log(Str)
    let Deq1 = new dq.Deque;
    for (let i in Str) {
        Deq1.insert(Str[i]);
    }
    console.log(Deq1.IsPalin())
}
module.exports = { PalinDeque }



