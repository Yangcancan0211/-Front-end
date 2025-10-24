var n = 100
function foo() {
  console.log(n)//undefined
  var n = 200
  console.log(n)//200
}

foo()
