var btn = document.querySelector('#btn')

btn.addEventListener('mousedown', mouseDown)
btn.addEventListener('mouseup', mouseUp)
btn.addEventListener('mouseenter', mouseEnter)
btn.addEventListener('mouseout', mouseOut)

function mouseDown() {
    btn.style.background = ('lightgray')
}
function mouseUp() {
    btn.style.background = ('none')
}
function mouseEnter() {
    btn.style.textDecoration = ('underline')
}
function mouseOut() {
    btn.style.textDecoration = ('none')
}

function addUp() {
    var bg = document.getElementsByTagName('body')[0]
    var resButton = document.querySelector('#resButton')
    var fstButton = document.querySelector('#fstButton')
    var sndButton = document.querySelector('#sndButton')
    var fstNumber = Number(fstButton.value)
    var sndNumber = Number(sndButton.value)
    var finalResult = fstNumber + sndNumber
    resButton.innerHTML = `<strong>${finalResult}</strong>`
    bg.style.background = ('rgb(69, 53, 175)')
}