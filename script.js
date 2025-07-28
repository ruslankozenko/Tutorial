const div = document.createElement('div');
const header = document.createElement('h1');

header.innerText = 'Learn JS'
header.classList.add('test')
const a = document.createElement('a');
a.href = 'https://developer.mozilla.org/ru/docs/Web/JavaScript'
a.innerText = 'MDN'

div.appendChild(header)
div.appendChild(a)
document.body.appendChild(div)

console.log(div)
console.log(header)
console.log(a)


