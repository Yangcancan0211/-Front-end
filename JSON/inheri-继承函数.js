  //真实开发,应用封装
       function inherit(Subtype, Supertype) {
         Subtype.prototype = Object.create(Supertype.prototype)
         Object.defineProperty(Subtype.prototype, "constructor", {
            enumerable :false,
            configurable :true,
            writable :true,
            value :Subtype
         })
       }