/*

-Best Pattern for Inheritance in javascript is
-Parasitic Combination Inheritance
-Why Inheritance?
-Encapsulate all the functionalities for every questions
-QUestion
-MultipleQuestions
-DragDropQuestions

 */

if(typeof Object.create!=='function'){

    Object.create=function(O){
        //Creates Temporary COnstructor F()
        function F(){

        }
        //F constructor cann access all the properties of  o
        F.prototype=o;

        return new F();
    };
}