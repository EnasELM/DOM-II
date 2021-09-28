// Your code goes here
const btn=document.querySelector('.btn');
btn.addEventListener('click',function() {
    btn.innerHTML='BUTTON'
});
const nav=document.querySelector('.nav-link');
nav.onmouseover=mouseOver;
function mouseOver(){
    nav.textContent='I AM HERE'
    nav.style.color='green'
}
nav.onmouseout=mouseOut;
function mouseOut(){
    nav.textContent='I AM OUT'
};
window.addEventListener('load',function(){
    console.log('HELLO');
});
const p =document.querySelector('p')
p.addEventListener('focus',(event) =>{
    event.target.style.background = 'pink';
});
const inp=document.createElement('input');
document.body.appendChild(inp);

inp.addEventListener('focus',(event) =>{
    event.target.style.background = 'pink';
});
const h1=document.querySelector('h1')
const h2=document.createElement('h2');

h2.prepend('new');
h2.insertAdjacentElement('afterend',h1);

const heightOutput = document.querySelector('h2');
const widthOutput = document.querySelector('h2');
function Size() {
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
}
window.onresize = Size;

function myFunction() {
var elmnt = document.querySelector('p');

elmnt.scrollLeft = 50;
elmnt.scrollTop = 10;

}
btn.addEventListener('click',myFunction)
  