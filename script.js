
const box1 = document.querySelector('#box1')
const box2 = document.querySelector('#box2')
const box3 = document.querySelector('#box3')

box1.addEventListener('click', () => {
    if (box1.classList.contains('circle')) {
        box1.classList.remove('circle')
    }else {
         box1.classList.add('circle')
    }
})

box2.addEventListener('click', () => {
    if (box2.classList.contains('blue')) {
        box2.classList.add('orange')
        box2.classList.remove('blue')
    }else {
        box2.classList.remove('orange')
        box2.classList.add('blue')
    }
})

box3.addEventListener('click', () => {
    if (box3.classList.contains('orange')) {
        box3.classList.add('green')
        box3.classList.remove('orange')
        box3.classList.remove('circle')
    } else {
        box3.classList.remove('green')
        box3.classList.add('orange')
        box3.classList.add('circle')
    }
})