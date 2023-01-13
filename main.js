const clear = document.querySelector('.clear')
const delNum = document.querySelector('.delete')
const equal = document.querySelector('.equal')
const previous = document.querySelector('.previous')
const current = document.querySelector('.current')
const numbers = document.querySelectorAll('.num')
const operations = document.querySelectorAll('.oper')
// console.log(clear, delNum, equal, previous, current, numbers, operations)
let curNum = ''
let prevNum = ''
let operator = null

const add = (a,b)=>a+b
const subtract = (a,b)=>a-b
const multiply = (a,b)=>a*b
const divide = (a,b)=>Math.round(a*100/b)/100

const operate=(a,b, operator)=>{
    switch(operator){
        case '+': return add(a,b)
        case '-': return subtract(a,b)
        case 'x': return multiply(a,b)
        case '/': if(b===0){
            return 'Error'
        }
        return divide(a,b)
        default: return
    }
}

const clearAll = () => {
    // console.log('Ac clicked')
    curNum = ''
    prevNum = ''
    previous.textContent = prevNum
    current.textContent = curNum
}

const deleteLast = () => {
    if(curNum==='')return
    curNum = curNum.slice(0,-1)
    current.textContent = curNum
}

const appendNum = (e) => {
    s = e.target.textContent
    if (s==='.' && curNum.includes('.')) return;
    curNum += s
    current.textContent=curNum
}

const checkError = (result)=>{
    if (result==='Error'){
        prevNum=''
        curNum=''
        previous.textContent = prevNum
        current.textContent = result
        setTimeout(() => {
            current.textContent = curNum
        }, 2000);
        return true
    }
    return false
}

const chooseOper = (e) =>{
    operator = e.target.textContent
    if(prevNum === ''){
        prevNum=curNum
        curNum=''
    }
    else {
        let prevOper = previous.textContent.slice(-1)
        // console.log(prevOper.slice(-1))
        let result = operate(parseFloat(prevNum), parseFloat(curNum), prevOper)
        if (checkError(result)) return
        prevNum = result.toString()
        curNum=''
    }
    previous.textContent = prevNum + operator
    current.textContent = curNum

}

const equals = ()=>{
    if(prevNum==='')return;
    let prevOper = previous.textContent.slice(-1)
    let result = operate(parseFloat(prevNum), parseFloat(curNum), prevOper)
    if (checkError(result))return
    prevNum = ''
    curNum = result.toString()
    previous.textContent = prevNum
    current.textContent = curNum
}


// Event Listeners
window.addEventListener('load', clearAll)
clear.addEventListener('click',clearAll)
delNum.addEventListener('click', deleteLast)
equal.addEventListener('click', equals)
numbers.forEach(number => {
    number.addEventListener('click', (e)=>appendNum(e))
});
operations.forEach(oper=>{
    oper.addEventListener('click', (e)=>chooseOper(e))
})