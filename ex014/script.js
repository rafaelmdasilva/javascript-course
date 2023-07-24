var currentTime = new Date()
var hours = currentTime.getHours()
var greet = document.querySelector('#greeting')
var clock = document.querySelector('#clock')

// var hours = 2
// var period = 'am'
var period = (hours >= 12 ? 'pm' : 'am')
var hours = ((hours + 11) % 12 + 1)
var time = (`${hours}${period}`)

clock.innerHTML = (`Current time: ${time}`)

var container = document.querySelector('.container')
var image = document.querySelector('.sub-container img')

function morning() {
    greet.innerHTML = ('Good morning')
    container.style.background = ('linear-gradient(225deg, rgba(135,207,235,1) 0%, rgba(248,219,123,1) 100%)')
    image.src = ('./images/Layer1.png')
}
function afternoon() {
    greet.innerHTML = ('Good afternoon')
    container.style.background = ('linear-gradient(180deg, rgba(135,207,235,1) 0%, rgba(255,255,255,1) 100%)')
    image.src = ('./images/Layer2.png')
}
function evening() {
    greet.innerHTML = ('Good evening')
    container.style.background = ('linear-gradient(125deg, rgba(135,207,235,1) 0%, rgba(255,68,0,1) 100%)')
    image.src = ('./images/Layer3.png')
}
function night() {
    greet.innerHTML = ('Good night')
    container.style.background = ('linear-gradient(180deg, rgba(35, 35, 71,1) 0%, rgba(0,0,0,1) 100%)')
    image.src = ('./images/Layer4.png')
}

if (period == 'am') {
    if (hours >= 1) {
        night()
    } if (hours >= 5) {
        morning()
    }
}
if (period == 'pm') {
    if (hours >= 1) {
        afternoon()
    } if (hours >= 5) {
        evening()
    } if (hours >= 8) {
        night()
    }
}
if (hours == 12) {
    if (period == 'am') {
        night()
    } else {
        afternoon()
    }
}