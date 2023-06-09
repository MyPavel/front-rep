const xml=`
    <list>
        <student>
            <name lang="en">
                <first>Ivan</first>
                <second>Ivanov</second>
            </name>
            <age>35</age>
            <prof>teacher</prof>
        </student>
        <student>
            <name lang="ru">
                <first>Петр</first>
                <second>Петров</second>
            </name>
            <age>58</age>
            <prof>driver</prof>
        </student>
    </list>`;


const parser= new DOMParser();
const xmlDOM=parser.parseFromString(xml,"text/xml");

let students=xmlDOM.getElementsByTagName("student")
console.log("students[1]:",students[0])
let student1=students[0]
console.log('stud1',student1)
let student2=students[1]
console.log('stud2',student2)

const name1=student1.querySelector('name');
const lang1=name1.getAttribute('lang');
const fistname1=name1.querySelector('first');
const secondname1=name1.querySelector('second');
const fullname1=fistname1.textContent+" "+secondname1.textContent;
const age1=Number(student1.querySelector('age').textContent);
prof1=student1.querySelector('prof').textContent;

const name2=student2.querySelector('name');
const lang2=name2.getAttribute('lang');
const fistname2=name2.querySelector('first');
const secondname2=name2.querySelector('second');
const fullname2=fistname2.textContent+" "+secondname2.textContent
const age2=Number(student2.querySelector('age').textContent);
prof2=student2.querySelector('prof').textContent

const obj1={name: fullname1, age: age1, prof: prof1, lang: lang1 }
const obj2={name: fullname2, age: age2, prof: prof2, lang: lang2 }

const obj_list=[obj1, obj2]

console.log(obj_list)

const result1={
  name: fullname1,
  age: age1,
  prof: prof1,
  lang: lang1,
}
console.log('student1',result1)


const result2={
  name: fullname2,
  age: age2,
  prof: prof2,
  lang: lang2,
}
console.log('student2',result2)

const total={list:[result1, result2]}
console.log('total',total)