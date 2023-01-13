const clear = document.querySelector('.clear')
const del = document.querySelector('.delete')
const equal = document.querySelector('.equal')
const previous = document.querySelector('.previous')
const current = document.querySelector('.current')
const numbers = document.querySelectorAll('.num')
const operations = document.querySelectorAll('.oper')
// console.log(clear, del, equal, previous, current, numbers, operations)

const add = (a,b)=>a+b
const subtract = (a,b)=>a-b
const multiply = (a,b)=>a*b
const divide = (a,b)=>a/b