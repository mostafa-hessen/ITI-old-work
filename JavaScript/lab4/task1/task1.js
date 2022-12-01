// task1 
let input=document.getElementById('input')
input.addEventListener('keypress', event => {
    alert(`btn pressed is =>  ( ${event.key} )   key code is=> ( ${event.keyCode} )`)
  })