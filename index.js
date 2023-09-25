//ex1

let camelCase = 'camelCase'
let USER_SNAKE_CASE = 'user snake case'
let CapiraleCase = 'Uppercare'

//ex2
var str1 = 'Andrei'
var str2 = 'Huzun'
var str3 = 'Prezent la lectie'

console.log(`${str1} ${str2} este ${str3}`);

//ex3

let num = 5

console.log(typeof num.toString())
console.log(typeof toString(num))
console.log(typeof Boolean(num))

// ex4 

let exemplu = '0'

console.log(typeof Number(exemplu))
console.log(typeof Boolean(exemplu))

//ex5

const falsy1 = 0
const falsy2 = ''
const falsy3 = null
const falsy4 = NaN
const falsy5 = undefined

if (falsy1) {
    console.log( 'Tatiana doarme mult')

} else {
    console.log('Tatiana nu doarme mult')
}

///
if (!falsy2) {
    console.log( 'Tatiana doarme mult')

} else {
    console.log('Tatiana nu doarme mult')
}
///

if (falsy3 && falsy4) {
    console.log( 'Tatiana doarme mult')

} else {
    console.log('Tatiana nu doarme mult')
}

//
if (falsy1 || !falsy5) {
    console.log( 'Tatiana doarme mult')

} else {
    console.log('Tatiana nu doarme mult')
}

