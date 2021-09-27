const minuses = document.querySelectorAll('.minus')
const pluses = document.querySelectorAll('.plus')
const decrement = (e) => {
    let value =  e.target.nextElementSibling.innerText
    if(value == 0){
        e.target.nextElementSibling.innerText = 0
    }else{
        e.target.nextElementSibling.innerText = value - 1
    }
}

const increment = (e) => {
    let value =  e.target.previousElementSibling.innerText
    e.target.previousElementSibling.innerText = Number(value) + 1 
}

minuses.forEach(minus => minus.addEventListener('click', e => decrement(e)))
pluses.forEach(plus => plus.addEventListener('click', e => increment(e)))