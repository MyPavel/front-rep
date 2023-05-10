const example = {
  field1: 'field1Value',
  field2: 'field2Value',

  method1: function() {
    this.method2()
    // console.log(this)
  },
  method2: function()  {
    console.log(this.field1)
  },
}

const protoSample1 = Object.create(example)

protoSample1.name = 'John'
protoSample1.func = function (){
  console.log("I'm Groot")
}

protoSample1.method1 = function(){
  return 2 + 3
}


// console.log(protoSample1.method1())

class exampleClass {
    constructor(field1, field2){
      this.field1 = field1
      this.field2 = field2
    }

    method1(){
      console.log("Method1 is called")
    }
    method2(){
      // console.log(isNaN(this.field1))

      if(!isNaN(this.field1) && !isNaN(this.field2)){
        return this.field1 + this.field2
      }
      else{
        return `This is not a number ${this.field1}`
      }
    }
}

class childClass extends exampleClass{
  constructor(arg1, arg2){
    super(arg1, arg2)
    this.arg1 = arg1
    this.arg2 = arg2
  }
}
const es1 = new exampleClass("two", "3")

const cc2 = new childClass(4, 6)

console.log(es1.__proto__)
console.log(cc2.__proto__)
console.log(cc2.__proto__.__proto__)
console.log(cc2.__proto__.__proto__.__proto__)
console.log(cc2.__proto__.__proto__.__proto__.__proto__)