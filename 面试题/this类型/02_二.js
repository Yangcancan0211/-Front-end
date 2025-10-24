var name = 'window'
// {} -> 对象
// {} -> 代码块
var person1 = {
    name: 'person1',
    foo1: function () {
        console.log(this.name);
    },
    foo2: () => console.log(this.name),
    foo3: function () {
       return function(){
         console.log(this.name);
       }
    },
    foo4: function () {
        return () => {
            console.log(this.name);
        }
    }
}
 
var person2 = {name:'person2'}

person1.foo1();//隐式绑定:this指向person1
person1.foo1.call(person2);//显式绑定:this指向person2

person1.foo2();//箭头函数没有自己的this,this指向定义时所在的作用域,此处指向全局对象window
person1.foo2.call(person2);//箭头函数没有自己的this,this指向定义时所在的作用域,此处指向全局对象window

person1.foo3()();//默认绑定:独立函数调用,this指向window
person1.foo3.call(person2)();//默认绑定:独立函数调用,this指向window
person1.foo3().call(person2);//显示绑定:this指向person2

person1.foo4()();//箭头函数没有自己的this,this指向定义时所在的作用域,此处指向person1
person1.foo4.call(person2)();//显式绑定:this指向person2
person1.foo4().call(person2);//箭头函数没有自己的this,this指向定义时所在的作用域,此处指向person1
