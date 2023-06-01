function clickMe() {
    console.log('И правда, не дурак (JS)')
}

function do1() {
    console.log('Делай раз (JS)')
}

but.onclick = clickMe;
but.addEventListener('click', do1)
but.addEventListener('click', () => alert('Делай два (JS)'))
but.addEventListener('click', function(event) {
    console.log('Пошли события: ')
    console.log(event.type)
    console.log(event.currentTarget)
    console.log(event.target)
    console.log(event.timestamp)
    console.log(event.view)
    console.log(event.eventPhase)
    console.log('The End')
});

