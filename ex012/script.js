var age = 17
if (age >= 14 && age <= 16) {
    console.log(`Might be eligible to a learner's permit${age == 15 || age == 16 ? ` or a graduated license.` : `.`}`)
} else if (age == 17) {
    console.log(`Might be eligible to a graduated license.`)
} else if (age >= 18) {
    console.log(`Eligible to a full license.`)
    return
} else {
    console.log('Does not meet the minimum age requirement.')
    return
}
console.log(`The age and laws about which type of licenses can be obtained may vary by state.`)
console.log(`Be sure to check with the Department of Motor Vehicles (DMV) or the equivalent agency in your state to learn more.`)