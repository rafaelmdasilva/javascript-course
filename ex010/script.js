function speedTest() {
    var speedElement = document.querySelector('input#speedInput')
    var speed = Number(speedElement.value)
    var msgElement = document.querySelector('p#msg')
    if (speed > 65) {
        msgElement.innerHTML = ('<strong>Violation Notice</strong>')
        msgElement.innerHTML += (`<br>Speed limit exceeded at ${speed}mph`)
    } else {
        msgElement.innerHTML = (`Current speed of <strong>${speed}mph</strong>`)
    }
    msgElement.innerHTML += ('<br>Here is a safety rule to remember! Never forget to <strong>wear your seat belt</strong> while driving.')
}