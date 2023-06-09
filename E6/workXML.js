const parser = new DOMParser();

const xmlString = `
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
</list>
`;

console.log('XML массив: ', xmlString);

const xmlDOM = parser.parseFromString(xmlString, "text/xml");
console.log('xmlDOM', xmlDOM)

const studNode = xmlDOM.querySelector("list");
// const nameNode = studNode.querySelector("name");
// const fullNameNode = nameNode.textContent("first") + " " + nameNode.textContent("second");
const ageNode = studNode.querySelector("age");
const profNode = studNode.querySelector("prof");
const name1=studNode.querySelector('name');
const fistname1=name1.querySelector('first');
const secondname1=name1.querySelector('second');
const fullname1=fistname1.textContent+" "+secondname1.textContent;
// console.log('Имя', nameNode)

const langAttr = name1.getAttribute('lang');
// console.log('Имя 2', fullNameNode);
// console.log('langAttr', langAttr);

const result = {
    lang: langAttr,
    // name: nameNode.textContent,
    fullName: fullname1.textContent,
    age: Number(ageNode.textContent),
};
  console.log('result', result);



