var name = 'window'
/**
    1.创建一个空的对象
    2.将这个空的对象赋值给this
    3.执行函数体中的代码
    4.将这个新的对象默认返回
 */
function Person (name)  {
    this.name = name;
    this.foo1 = function () {
        console.log(this.name);
    },
   this.foo2 = () => console.log(this.name),
    this.foo3 = function () {
       return function(){
         console.log(this.name);
       }
    },
    this.foo4 = function () {
        return () => {
            console.log(this.name);
        }
    }
}
 // 实例化对象
var person1 = new Person('person1')
var person2 = new Person('person2')

person1.foo1();//隐式绑定:this指向person1
person1.foo1.call(person2);//显式绑定:this指向person2

person1.foo2();//箭头函数没有自己的this,this指向定义时所在的作用域(上层作用域),此处指向person1
person1.foo2.call(person2);//箭头函数没有自己的this,this指向定义时所在的作用域(上层作用域),此处指向person2

person1.foo3()();//默认绑定:this指向window
person1.foo3.call(person2)();//默认绑定:this指向window
person1.foo3().call(person2);//显示绑定:this指向person2

person1.foo4()();//箭头函数没有自己的this,this指向定义时所在的作用域,此处指向person1
person1.foo4.call(person2)();//显式绑定:this指向person2
person1.foo4().call(person2);//箭头函数没有自己的this,this指向定义时所在的作用域,此处指向person1
