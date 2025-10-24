var name = 'window';

var person = {
    name: "person",
    sayName: function () {
        console.log(this.name);
    }
};
function sayName() {
    var sss = person.sayName;
    sss();//独立函数调用,使用默认绑定,this指向window
    person.sayName();//隐式绑定,this指向person
    (person.sayName)();//隐式绑定,this指向person
    (b = person.sayName)(); //简介函数引用,使用默认绑定,this指向window
}
sayName();