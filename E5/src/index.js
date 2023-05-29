

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
const abc = document.getElementById("loko");
abc.setAttribute('title', 'Captain');
abc.innerHTML = "Shepard";
abc.style = "color: red";

// Создаём элемент
const rank = 'Captain'
const customDiv = document.createElement("div");

// Заполняем его

customDiv.innerHTML = `<span>${rank}</span>`;

// Ищем родительский элемент и добавляем созданный элемент в дерево DOM

const parent = document.getElementById("loko");
parent.insertAdjacentHTML('afterbegin', `<span id="custom"> ${rank} </span>`);
// document.body.insertBefore(customDiv, parent);