var Party=function(){
    this.id=1;
    this.name='Haider';
    this.city='FSD';
    this.credit='House No 5A Block G.M Abad';
    this.debit='Blue';
    this.balance=1000.0;
    this.broker='';
};

Party.prototype={

    constructor:Party,
    getId:function()
    {
        return this.id;
    },
    setId:function(id){
        this.id=id;
    },
    getName:function(){
        return this.name;
    },
    setName:function(name){
        this.name=name;
    },
    getCredit:function(){
        return this.credit;
    },
    setCredit:function(credit){
        this.credit=credit;
    }


};

var haider=new Party();
console.log(haider);
module.exports=Party;