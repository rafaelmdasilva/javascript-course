let box = ['orage', 22, 46, 17]
box[0] = 'apple'
box.push(3)
box.sort()

// for (let keyPos = 0; keyPos < box.length; keyPos++) {
//     console.log(`${box[keyPos]} in the position ${keyPos}`)
// }

let num = 22
let indexNum = box.indexOf(num)
for (let keyPos in box) {
    console.log(`${box[keyPos]} in the position ${keyPos}`)
}

console.log(indexNum == -1 ? 'Value not found' : `${num} was found in the position ${indexNum}`)