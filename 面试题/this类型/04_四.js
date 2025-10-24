var name = 'window'
/**
    1.创建一个空的对象
    2.将这个空的对象赋值给this
    3.执行函数体中的代码
    4.将这个新的对象默认返回
 */
function Person (name)  {
    this.name = name;
   this.obj = {
    name: 'obj',
    foo1: function () {
        return function() {
            console.log(this.name);
        }
    },
    foo2: function () {
        return () => {
            console.log(this.name);
        }
    }
   }
 
}
var person1 = new Person('person1')
var person2 = new Person('person2')

person1.obj.foo1()();//默认绑定:独立函数调用,this指向window
person1.obj.foo1.call(person2)();//默认绑定:独立函数调用,this指向window
person1.obj.foo1().call(person2);//显示绑定:this指向person2

person1.obj.foo2()();//箭头函数没有自己的this,this指向定义时所在的作用域,此处指向obj
person1.obj.foo2.call(person2)();//显式绑定:this指向person2
person1.obj.foo2().call(person2);//箭头函数没有自己的this,this指向定义时所在的作用域,此处指向obj