var ItemCategory=require('./itemcategory');

var yarn=new ItemCategory(1,'yarn');

//console.log(yarn.getId() + ' '+yarn.getName());

var Item=function(id,name,itemCategory){
    this.id=1;
    this.name='Staple';
    this.itemCategory=itemCategory;
}

//console.log(item);
module.exports=Item;