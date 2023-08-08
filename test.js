// const arrays = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
// const counts = {};

// const newA = [...new Array(100000).fill(1)]

// // arrays.map((arr) => {
// //     counts[arr] = counts[arr] ? counts[arr] + 1 : 1
// // })

// // console.log(arrays)


// // console.log(counts);

// console.time('start')
// let i = 0;
// while (i < newA.length) {
//     i++
// }

// console.timeEnd('start')

// console.time('for')
// for (let i = 0; i < newA.length; i++) {
//     i++
// }

// console.timeEnd('for')


// console.time('forEach')
// newA.forEach((item) => {
//     item++
// })
// console.timeEnd('forEach')


// console.time('For Of')
// for (let item of newA) {
//     item++
// }
// console.timeEnd('For Of')




// console.log(arrays)

// input: AAAABBCCCCD
// ouput: A4B2C4D1
const input = 'AABBCCD'
let result = ''
let i = 0
let leter;
let numberOfLeter = 1
while (i < input.length) {
    leter = input[i]
    const nextLeter = input[i + 1]
    if (leter == nextLeter) {
        numberOfLeter++
        i++
        continue
    } else if (!nextLeter) {
        result += leter
        result += numberOfLeter
        // i++
        break
    }
    else {
        result += leter
        result += numberOfLeter
        leter = nextLeter
        numberOfLeter = 1
        i++
    }
}

console.log({ result })