const btn = document.querySelector('.btn')
const btn_del = document.querySelector('.btn--delete')

function addCard() {
    var item = document.createElement('div')
    item.classList.add('card')
    var elem = document.querySelector('.box')
    elem.appendChild(item)
}

function remCard() {
    var item = document.querySelector('.card:nth-child(2)')
    var elem = document.querySelector('.box')
    elem.removeChild(item)
}

btn.addEventListener('click', addCard)
btn_del.addEventListener('click', remCard)
