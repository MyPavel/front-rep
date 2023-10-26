const person = {
    city: "Moscow",
    gender: "Male"
}

const student = Object.create(person);

student.ownCity = "Piter";
student.lvl = "80 lvl"

function MyFunc(obj) {
    for(let key in obj) {
        if(obj.hasOwnProperty(key)) {
           console.log("Own property: " + key + ": " + obj[key]);
                 }
        }
}

MyFunc(student);