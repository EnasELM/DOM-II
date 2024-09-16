// Your code goes here
const btn=document.querySelector('.btn');
btn.addEventListener('click',function() {
    btn.innerHTML='BUTTON';
});
const nav=document.querySelector('.nav-link');
nav.onmouseover=mouseOver;
function mouseOver(){
    nav.textContent='I AM HERE';
    nav.style.color='green'
};
const h1=document.querySelector('h1');
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

h1.insertAdjacentElement('afterend',inp);

inp.addEventListener('focus',(event) =>{
    event.target.style.background = 'pink';
});

const h2=document.createElement('h2');

h2.innerHTML='I AM H2 JUST I ADD IT';
h1.insertAdjacentElement('afterend',h2);

const heightOutput = document.querySelector('h2');
const widthOutput = document.querySelector('h2');
function Size() {
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
}
window.onresize = Size;

function myFunction() {
let elmnt = document.querySelector('p');
elmnt.scrollLeft = 50;
elmnt.scrollTop = 10}

btn.addEventListener('click',myFunction())
const select=document.createElement('select');
const footer = document.querySelector('footer');
select.style.backgroundColor='red';
select.style.width='60px';
select.item('select me');
select.style.color='black'
select.textContent='select'
h1.insertAdjacentElement('beforeend',select);
//dblclick
btn.addEventListener('dblclick',function(){
    h1.style.color='red';

});
document.addEventListener("drag", function(event) {

}, false);
document.addEventListener("drop", function(event) {
    
    event.preventDefault()
})