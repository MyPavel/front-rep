// Function Declaration
// Объявляем после или до использования
func1();

function func1(){
    console.log(1)
}

// Function Expression
// var, let, const
// Объявлем до ее использования

var func2 = function(){
    console.log(2)
}

func2();
console.log(func2)