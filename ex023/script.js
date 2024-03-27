let number = []
let duplicated = false
const subContainer = document.querySelector('.sub-container')
const selectElement = document.createElement('select')
selectElement.size = 2
const hElement = document.getElementsByTagName('h1')[0]
let pageTitle = hElement.textContent

//results button
const subElement = document.querySelector('.sub-container')
const resultsButton = document.createElement('input')
resultsButton.type = 'button'
resultsButton.value = 'Results'

//results element
const resultsElement = document.createElement('div')
subContainer.appendChild(resultsElement)
resultsElement.id = 'results'
resultsElement.style.order = 2

//check for repetition or empty values
function numScan() {
    duplicated = false
    const numElement = Number(document.querySelector('#num').value)
    for (let index = 0; index != number.length; index++) {
        if (number[index] == numElement) {
            duplicated = true
        }
    }
    if (numElement == 0 || duplicated == true) {
        hElement.innerHTML = 'error'
    } else {
        numList()
    }

    function numList() {
        resultsElement.innerHTML = ''
        number.push(numElement)

        //creates 'option' with array value
        const optionElement = document.createElement('option')
        optionElement.id = numElement
        subContainer.appendChild(selectElement)
        selectElement.appendChild(optionElement)
        optionElement.disabled = true
        optionElement.innerHTML = numElement
        if (number.length >= 2) {
            selectElement.size = number.length //adjusts the 'select' size dynamically
        }

        hElement.innerHTML = pageTitle

        //results button
        if (number.length >= 2) {
            resultsButton.onclick = numResults
            subElement.appendChild(resultsButton)
        }
    }
}

function numResults() {
    let numLowest
    let numHighest
    let numSum = 0
    for (let index = 0; index != number.length; index++) {
        numSum += number[index]
        if (numLowest == undefined || numLowest >= number[index]) {
            numLowest = number[index]
        } 
        if (numHighest == undefined || numHighest <= number[index])
            numHighest = number[index]
    }

    let numLength = number.length
    let numAverage = numSum / numLength

    resultsElement.innerHTML = `Array Length: ${numLength} <hr> Lowest Number: ${numLowest} <hr> Highest Number: ${numHighest} <hr> Summation: ${numSum} <hr> Average: ${numAverage.toFixed(2)}`
}