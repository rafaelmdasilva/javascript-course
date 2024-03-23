function forLoop() {
    let numStart = Number(document.querySelector('#num-start').value)
    let numEnd = Number(document.querySelector('#num-end').value)
    let numSkip = Number(document.querySelector('#num-skip').value)
    let resElement = document.querySelector('.results')
    resElement.innerHTML = ('')

    if (numStart == numEnd || numSkip <= 0) {
        resElement.innerHTML = ('ERROR')
        return
    } else if (numStart < numEnd) {
        for (; numStart <= numEnd; numStart += numSkip)
            resElement.innerHTML += (`${numStart} \u{21AA} `)
    } else {
        for (; numStart >= numEnd; numStart -= numSkip) {
            resElement.innerHTML += (`${numStart} \u{21AA} `)
        }
    }
    resElement.innerHTML += ('\u{2714}')
}