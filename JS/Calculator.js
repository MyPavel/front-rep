const a = prompt("Enter first value")
const b = prompt("Enter operation type +, -, *, /")
const c = prompt("Enter second value")

function calc(a, b, c){
    if(b == "+") {
    return alert("Operation result: " + Number(a) + Number(c));
    }
    else if(b == "-") {
        return alert("Operation result: " + a - c);
      }
    else if(b == "*") {
      return alert("Operation result: " + a * c);
    }
    else if(b == "/") {
      return alert("Operation result: " + a / c);
    }
    else  return alert("Wrong Operation")
    }
  
  calc(a, b, c);
