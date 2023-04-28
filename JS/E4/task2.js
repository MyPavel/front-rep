const person = {
    city: "Moscow",
    gender: "Male"
}

const student = Object.create(person);

student.ownCity = "Piter";
student.lvl = "80 lvl";

const x = "Piter";
const y = "Female";

function MyFunc(obj, value) {
    for(let key in obj) {
      return console.log(value === obj[key]);       
        }
        }


MyFunc(student, x);
MyFunc(student, y);
