function insertToDisplay(data) {
    document.querySelector('#display').value += data
}

//função limpar "C"
function clean() {
    document.querySelector('#display').value = ''
}

// função apagar "<-"
function back() {
    const display = document.querySelector('#display')
    display.value = display.value.slice(0, -1)
}

// função resultado "="
function result() {
    const display = document.querySelector('#display')
    try {
        display.value = eval(display.value)
    } catch {
        display.value = 'Error'
    }
}