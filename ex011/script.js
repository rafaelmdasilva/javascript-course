function countryTest() {
    var countryElement = document.querySelector('input#countryInput')
    var country = countryElement.value.toUpperCase()
    var msgElement = document.querySelector('p#msg')
    if (country != 'USA') {
        msgElement.innerHTML = ('Non-US Citizen.')
    } else {
        msgElement.innerHTML = ('US Citizen.')
    }
}