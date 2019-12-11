/********************************************************
* @description :calculate the each stock and total value
* @return Displays the stock report
*********************************************************/
const fs = require('fs')
class stockAccountmgt {
    constructor() {
        this.content = null;
        this.fileName = null;
    }
    //parsing the json files
    jsonParse(fileName) {
        this.fileName = fileName;
        this.content = JSON.parse(fs.readFileSync(fileName));
    }
    //used to display the data
    disp() {
        this.content.Stock.forEach(ele => {
            console.log(ele);
        });
    }
    //returns the total value of the stock

    value() {
        var sum1 = 0;
        this.content.Stock.forEach(ele => {
            sum1 = sum1 + ele.price * ele.numberofshares

        });
        this.content.Stock.forEach(ele => {
            console.log(ele.name + ' is at rs ' + ele.price * ele.numberofshares);
        });

        console.log('Total value of stocks ' + sum1 + "rs");
    }
}
module.exports = { stockAccountmgt }