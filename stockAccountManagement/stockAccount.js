/**************************************************************
* @Execution : default node : cmd> stock.js
* @description :calculate the value of each stock and total value
* @overview : To print the stock report
* @author : channabasava
*************************************************************/
try {
    const stock = require('../stockAccountManagement/stockAccountBl')
    let obj = new stock.stockAccountmgt()
    obj.jsonParse('/home/admin1/channabasava/bridgeLabzFellowShipPrgms/javaScriptOops/stockAccountManagement/stockAccount.json')
    obj.value()
} catch (e) {
    console.log(e.message)
}