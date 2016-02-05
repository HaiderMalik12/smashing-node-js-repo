var myObj={
    name:'Haider',
    lastName:'Malik'
};

var item={
    name:'Staple',
    unit:'m',
    qty:12,
    rate:100.0,
    credit:100.0,
    debit:1000.0,
    balance:1000.0
};
console.log(item);

var Item=function(){

    this.id=1;
    this.name='Staple';
    this.credit=100.0;
    this.debit=100.0;
    this.balance=1000.0;
    this.qty=100;
    this.rate=1000.0;
};

Item.prototype.getFullDetails=function(){
    return this.id + this.name +this.credit +this.balance +this.credit+this.debit;
}

var staple=new Item();
console.log(staple);

//You wana use constructor pattern
function Employee(){};

Employee.prototype.firstName='Haider';
Employee.prototype.lastName='Patel';
Employee.prototype.startDate=new Date();
Employee.prototype.signedDate=new Date();
Employee.prototype.fullName=function(){
    console.log(this.firstName +this.lastName);
};

//I am trying to use constructor pattern
//constructor function
var haider=new Employee();
console.log(haider.firstName);
console.log(haider.lastName);
console.log(haider.fullName());

function Employee(name,profession){
    this.name=name;
    this.profession=profession;
}

//Constructor Pattern;
var richard=new Employee('Haider','Ddeveloper');
console.log(richard.name);
console.log(richard.profession)

