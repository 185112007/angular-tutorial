// get element by id
document.getElementById('bio').innerHTML = 'Hello DOM!';

let p1 = document.getElementById('p1');
let message = document.getElementById('message');

message.innerHTML = p1.innerHTML;

// get elements by tag name
let ulS = document.getElementsByTagName('ul');
let cities = ulS[0];

liS = cities.getElementsByTagName('li');

for (let i = 0; i < liS.length; i++) {
    console.log(liS[i].innerHTML);
}

// get elements by class name
let intro1 = document.getElementsByClassName('intro1');
for (let i = 0; i < intro1.length; i++) {
    console.log(intro1[i].innerHTML);
}

// get element by selector
let queryElements = document.querySelectorAll('p.intro1');
console.log(queryElements.length);

// get elements by name
let customerNameElement = document.getElementsByName('customerName');
customerNameElement.forEach(el=>{
   console.log(el['value']);
});

// add event listener
let eventSample = document.getElementById('h1ForEvent');
eventSample.addEventListener('click', changeColor);
function changeColor(){
    this.style.color = 'yellow';
    document.getElementById('div1').style.color = 'blue';
    customerNameElement[0]['value'] = 'Mehri';
}

// work with nodes
let node = document.getElementById('tree');
console.log(node.childNodes[0].nodeValue);

let h2Element = document.createElement('h2');
let textNode = document.createTextNode('Hello DOM Manipulation');

h2Element.appendChild(textNode);

let div1Element = document.getElementById('div1');
let p6Element = document.getElementById('p6');

div1Element.insertBefore(h2Element, p6Element);

// remove element
div1Element.removeChild(p6Element);

// replacement
let p5 = document.getElementById('p5');
div1Element.replaceChild(h2Element, p5);