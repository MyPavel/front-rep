// Привязываем массив к константе
const requestURL = ('https://jsonplaceholder.typicode.com/users');


function sendRequest (method, url, body = null) {
    return new Promise((resolve, reject) => {
// Новый запрос протокола HTTP
const xhr = new XMLHttpRequest();

// метод GET запрашивает данные у сервера. Метод POST отправляет данные на сервер (встроенный метод)
xhr.open(method, url);

// распарсить ответ в формате JSON
xhr.responseType = 'json';

// вызываем метод и устанавливаем хэдеры, которые отправляются с запросом
xhr.setRequestHeader('Content-Type', 'aplication/json');

// Выгружает данные
xhr.onload = () => {
    if (xhr.status >= 400) {
        reject('Error: ' + xhr.response);
    } else {
        resolve("Not Error: " + xhr.response)
    }
}

xhr.onerror = () => {
    reject('Error: ' + xhr.response);
}
// метод send отправляет запрос (встроенный метод)
xhr.send(JSON.stringify(body));
    })
}

const body = {
    name: 'Sergey',
    age: 27,
    sex: 'male'
}

sendRequest('GET', requestURL)
.then(data => console.log(data))
.catch(err => console.log(err))

// sendRequest('POST', requestURL, body)
// .then(data => console.log(data))
// .catch(err => console.log(err))

