const person = {
    city: "Moscow",
    gender: "Male"
}

const student = Object.create(person);

student.ownCity = "Piter";
student.levl = "80 lvl"



function MyFunc(sudent) {
    var result = "";
    for(let key in student) {
        if(student.hasOwnProperty(key)) {
           result += key + "; "
        }
        }
    return console.log("Object Own Property: " + result)

}
MyFunc(student)

