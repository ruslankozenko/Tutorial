//  Образец 1 
// const box1 = document.querySelector('#box1')
// const box2 = document.querySelector('#box2')
// const box3 = document.querySelector('#box3')

// box1.addEventListener('click', () => {
//     if (box1.classList.contains('circle')) {
//         box1.classList.remove('circle')
//     }else {
//          box1.classList.add('circle')
//     }
// })

// box2.addEventListener('click', () => {
//     if (box2.classList.contains('blue')) {
//         box2.classList.add('orange')
//         box2.classList.remove('blue')
//     }else {
//         box2.classList.remove('orange')
//         box2.classList.add('blue')
//     }
// })

// box3.addEventListener('click', () => {
//     if (box3.classList.contains('orange')) {
//         box3.classList.add('green')
//         box3.classList.remove('orange')
//         box3.classList.remove('circle')
//     } else {
//         box3.classList.remove('green')
//         box3.classList.add('orange')
//         box3.classList.add('circle')
//     }
// })

// <!-- Образец 1/-->


// <!-- Образец 2-->


// const container = document.querySelector('#skills')

// const skills = [
//     {type: 'js', title: 'Вивчити JavaScript', done: true},
//     {type: 'git', title: 'Практикування в Git', done: true},
//     {type: 'react', title: 'Вивчити React', done: false},
//     {type: 'node', title: 'Зрозуміти NodeJS', done: false},
//     {type: 'ts', title: 'Вивчити TypeScript', done: false}
// ]

// function render() {
//     let html = ''

//     for ( let i = 0; i < skills.length; i++ ) {

//         html += toHTML(skills[i])
//     }

//     container.innerHTML = html
// }

// function toHTML(skill) {
//     const checked = skill.done ? 'checked' : ''
//     return `
//     <li data-type"skills.type">
//     <label>
//     <input type="checkbox" ${checked} />
//     ${skill.title}
//     </label>
//     </li>
//     `
// }

// render()

// <!-- Образец 2/-->

//   Образец 3

// const minus = document.querySelector('#minus')
// const plus = document.querySelector('#plus')
// const normal = document.querySelector('#normal')
// const bold = document.querySelector('#bold')
// const italic = document.querySelector('#italic')
// const text = document.querySelector('h3')

// const styles = window.getComputedStyle(text)
// let fontSize = parseInt(styles.fontSize)

// minus.addEventListener('click', () => {
//     fontSize--
//     text.style.fontSize = fontSize + 'px'      
// })

// plus.addEventListener('click', () => {
//     fontSize++
//     text.style.fontSize = fontSize + 'px'      
// })

// bold.addEventListener('click', () => {
//     text.style.fontWeight = 'bold'    
// })

// italic.addEventListener('click', () => {
//     text.style.fontStyle = 'italic'    
// })

// normal.addEventListener('click', () => {
//     text.style.fontStyle = 'normal'
//     text.style.fontWeight = 'normal' 
// })

//  Образец №3/

//  Образец №4

const panel = document.querySelector('#panel')
const text = document.querySelector('h3')

const styles = window.getComputedStyle(text)
let fontSize = parseInt(styles.fontSize)

panel.addEventListener('click', event => {
    const type = event.target.dataset.type

    if (type === 'minus') {
        fontSize--
        text.style.fontSize = fontSize + 'px'
    } else if (type === 'plus') {
        fontSize++
        text.style.fontSize = fontSize + 'px'
    } else if (type === 'normal') {
        text.style.fontWeight = 'normal'
        text.style.fontStyle = 'normal'
    } else if (type === 'bold') {
        text.style.fontWeight = 'bold'
    } else if (type === 'italic') {
        text.style.fontStyle = 'italic'
    }
})

//  Образец №4/