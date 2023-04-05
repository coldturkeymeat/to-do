import './style.css';
import printMe from './print';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    element.innerText = "Hello";
    element.classList.add('hello');

    btn.innerHTML = "Click me";
    btn.onclick = printMe;

    element.appendChild(btn);
    
    return element;
}

document.body.appendChild(component());