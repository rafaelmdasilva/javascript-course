var btn = document.querySelector('#btn')

btn.addEventListener('click', mouseClick)
btn.addEventListener('mouseenter', mouseEnter)
btn.addEventListener('mouseout', mouseOut)

function mouseClick() {
    btn.style.background = ('lightgray')
}
function mouseEnter() {
    btn.style.textDecoration = ('underline')
}
function mouseOut() {
    btn.style.textDecoration = ('none')
    btn.style.background = ('none')
}