  //创建对象的过程
  function createObject(o) {
    function F() {}
      F.prototype = o
      return new F()
  }
  
  
  //真实开发,应用封装
       function inherit(Subtype, Supertype) {
        //Subtype.prototype.__proto__ = Supertype.prototype
        //Object.setPrototypeOf(Subtype.prototype, Supertype.prototype)
         Subtype.prototype = Object.create(Supertype.prototype)
         Object.defineProperty(Subtype.prototype, "constructor", {
            enumerable :false,
            configurable :true,
            writable :true,
            value :Subtype
         })
       }