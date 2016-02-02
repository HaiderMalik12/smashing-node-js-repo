

var ItemCategory=function(id,name){
    this.id=id;
    this.name=name;
};

//make  public methods
ItemCategory.prototype.getId=function(){
    return this.id;
}
ItemCategory.prototype.getName=function(){
    return this.name;
}
module.exports=ItemCategory;