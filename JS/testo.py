a = int(input("Enter first value: "))
b = input("Enter operation type +, -, *, /: ")
c = int(input("Enter first value: "))

def calc(a, b, c):
    d = None
    if b == "+":
       d = a + c; 
       return print("Operation result: " + str(d))
    elif b == "-":
       d = a - c
       return print("Operation result: " + str(d))
    elif b == "*":
      d = a * c
      return print("Operation result: " + str(d))
    elif b == "/":
      d = a / c
      return print("Operation result: " + str(d))
    else:  
        return print("Wrong Operation")
    
  
calc(a, b, c)
