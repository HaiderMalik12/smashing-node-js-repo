/*
 By using .call and .apply methods you can change the
 reference of this to diff object when calling the function

 */

function a(){
   this.a==this.b;
}

a.call({a:'b'});


function a (b, c) {
    b == 'first'; // true
    c == 'second'; // true
}
a.call({ a: 'b' }, 'first', 'second')
a.apply({ a: 'b' }, ['first', 'second'])