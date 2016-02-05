function User(theName,theEmail){
    //this properties will be unoque to every instance of user object
    this.name=theName;
    this.email=theEmail;
    this.quizScores=[];
    this.currentScores=0;
}
//we are overwriting the prototype property with an object literal
//we define all our methods
//we dont need to write each type User.prototype
User.prototype={
    //Argument Constructor
    //every function in javascript has a constructor property
    constructor:User,

    //These are all member functions
    saveScore:function(theScoreToAdd){
        this.quizScores.push(theScoreToAdd)
    },
    showNameAndScores:function(){
        var scores=this.quizScores.length > 0 ? this.quizScores.join(","):"No Score";
        return this.name+' Scores '+scores;
    },
    changeEmail:function(newEmail){
        this.email=newEmail;
        return'New Email Saved'+this.email;
    }
}

//-----------------make instances of User Function ---------

var firstUser=new User('Haider','haidermalik504@gmail.com');
firstUser.changeEmail('haidermalik5044@gmail.com');
firstUser.saveScore(15);
firstUser.saveScore(10);
console.log(firstUser.showNameAndScores());

//make a 2nd user because we want to give the access to every instance of User

var haider=new User('Haider Malik','haidermalik504@gmail.com');
haider.saveScore(12);
console.log(haider.showNameAndScores());
