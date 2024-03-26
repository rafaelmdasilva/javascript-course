function multiTable() {
    const num = Number(document.querySelector('#num').value)
    const tableElement = document.querySelector('.table')

    const tableList = document.createElement('ul')

    if (num == '') {
        tableElement.innerHTML = ('ERROR')
    } else {
        for (let multi = 1; multi <= 10; multi++) {
            let results = document.createElement('li')
            results.innerHTML = (`${num} x ${multi}: ${num * multi}`)
            tableList.appendChild(results)
        }
        tableElement.innerHTML = ('')
        tableElement.appendChild(tableList)
    }
}