function formCheck() {
    var yearElement = document.querySelector('input#year')
    var year = Number(yearElement.value)
    var currentDate = new Date()
    var currentYear = currentDate.getFullYear()

    var subElement = document.querySelector('.sub-container')
    var response = document.createElement('p')
    response.style.fontWeight = ('bold')
    
    var ageCheck = (false)

    if (year >= currentYear || year == 0 || year <= (currentYear - 150)) {
        response.innerHTML = ('Invalid Input')
        subElement.appendChild(response)
        return
    } else {
        var age = (currentYear - year)
        if (age >= 14 && age <= 16) {
            response.innerHTML = (`Might be eligible to a learner's permit${age == 15 || age == 16 ? ` or a graduated license.` : `.`}`)
            subElement.appendChild(response)
        } else if (age == 17) {
            response.innerHTML = ('Might be eligible to a graduated license')
            subElement.appendChild(response)
        } else if (age >= 18) {
            response.innerHTML = ('Eligible to a full license')
            subElement.appendChild(response)
            var ageCheck = (true)
        } else {
            response.innerHTML = ('Does not meet the minimum age requirement')
            subElement.appendChild(response)
            return
        }
    }

    var disclaimer = document.createElement('p')
    if (ageCheck == false) {
        disclaimer.innerHTML = (`The age and laws about which type of licenses can be obtained may vary by state, be sure to check with the Department of Motor Vehicles (DMV) or the equivalent agency in your state to learn more.`)
        subElement.appendChild(disclaimer)
    }

    var impairedElement = document.getElementsByName('impaired')
    if (impairedElement[0].checked) {
        var impaired = document.createElement('p')
        impaired.style.fontWeight = ('bold')
        impaired.innerHTML = ('It\'s worth noting that certain disabilities or medical conditions may result in restrictions or limitations on driving privileges.')
        subElement.appendChild(impaired)
    }
}