/***********************************************************
* Purpose : Grocery class for maintain the data.
* File    : grocery.js
* Author  : channabasava
*************************************************************/
class Grocery 
{
    constructor(name, wheats, price) {
        this.name = name;
        this.wheats = wheats;
        this.price = price;
    }
    total() {
        return this.wheats* this.price;
    }
}
class Rice extends Grocery
 { 
    constructor(name, wheats, price) 
    {
      //super key word used to point to immediate parent class object
        super(name, wheats, price)
    }
}
class Wheat extends Grocery
 {
    constructor(name, wheats, price)
     {
        super(name, wheats, price)
    }
}
class Pulse extends Grocery {
    constructor(name, wheats, price) {
        super(name, wheats, price)
    }
}
module.exports = { Rice, Wheat, Pulse }