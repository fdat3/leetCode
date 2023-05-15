/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
    let answers = [];
    for (i = 1; i <= n; i++) {
        let string = ''
        i % 3 === 0 ? string += 'Fizz' : undefined
        i % 5 === 0 ? string += 'Buzz' : undefined
        string === '' ? string += i : undefined
        answers.push(string)
    }
    return answers
};

console.log(fizzBuzz(15));