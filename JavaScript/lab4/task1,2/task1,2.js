// task1 
let input=document.getElementById('input')
input.addEventListener('keypress', event => {
    alert(`btn pressed is =>  ( ${event.key} )   key code is=> ( ${event.keyCode} )`)

  })


  // task2
  let dateNow
  let x=0;
  let setIntervalVariabl;
  let inputTime=document.getElementById('inputTime')
  let displayTimeBtn=document.getElementById('displayTime')
  console.log(inputTime,displayTimeBtn);
  displayTimeBtn.addEventListener('click',()=>{
    alert('clock start')
    dateNow=new Date();

    inputTime.value=`${dateNow.getHours()}:${dateNow.getMinutes()}:${dateNow.getSeconds()}`

      setIntervalVariabl=setInterval(()=>{
     dateNow=new Date();

      inputTime.value=`${dateNow.getHours()}:${dateNow.getMinutes()}:${dateNow.getSeconds()}`
      }
      ,1000)
  })
  document.addEventListener('keydown ', event => {
  
  })
  //  Stop the clock when user clicks (alt + w) letter. 
  /*
  Q1:What’s the difference between handling the event using addEventListner() and other methods? 
  answer: we can make clear interval by addEventListener
  ===========================================================
  Q2:Will addEventListner() will overwrite the other handler function attached to that button before? 
  answer:no

  */





  