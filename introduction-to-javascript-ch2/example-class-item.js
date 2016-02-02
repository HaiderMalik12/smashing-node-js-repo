var Item = function () {
    this.id = 0;
    this.name = '';
    this.qty = 0;
    this.unit = 'm';
    this.credit = 0.0;
    this.debit = 0.0;
    this.balance = 0.0
};

//every instance will access this property
Item.prototype.getAllAttributes=function(){
    return this.id +this.name +this.qty;
}
//create a new object
var mariaB = new Item();

mariaB.name = 'Maria B';
mariaB.id = 1;
mariaB.balance = -1000.0;
mariaB.credit = 1000.0;
mariaB.debit = 0.0;
mariaB.qty = 10;
mariaB.unit = 'm';


console.log(mariaB);
console.log(mariaB.getAllAttributes());