let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/albums');

xhr.onload = function() {
    if (xhr.status != 200) {
        console.log('Статус ответа: ', xhr.status);
    } else {
        console.log('Результат: ', JSON.parse(xhr.response));
    }
};

xhr.onprogress = function(event) {
    console.log(`Загружено ${event.loaded} из ${event.total}`)
};

xhr.onerror = function() {
    console.log('Ошибка! Статус овтета: ', xhr.status);
};

xhr.send();