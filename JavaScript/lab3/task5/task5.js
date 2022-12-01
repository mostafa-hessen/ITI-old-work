// let fullName=prompt("")

let rgexForFullName= /^([a-z]{4,})/i
let inputes=document.querySelectorAll('input');
let pEmailEx=document.querySelector('.emailEx')
let fullNameEx=document.querySelector('.fullNameEx')
let spans=document.querySelectorAll('form span')
let rgexForEmail= /^[a-z]{2,}(\d|\w){2,}@\w{3,}.com.eg$/i

// input 1
inputes[0].addEventListener('keyup',()=>{
         
    if(rgexForFullName.test(inputes[0].value)){
        inputes[0].style.border="1px dashed green"
        fullNameEx.classList.remove('active')
        spans[0].classList.add('rightName')

    }

    else{
        inputes[0].style.border="1px dashed red"
        fullNameEx.classList.add('active')
        spans[0].classList.remove('rightName')


    }



})
 

// input 2
    inputes[1].addEventListener('keyup',()=>{
         
        if(rgexForEmail.test(inputes[1].value)){
            inputes[1].style.border="1px dashed green"
            pEmailEx.classList.remove('active')
            spans[1].classList.add('rightEmail')

        }

        else{
            inputes[1].style.border="1px dashed red"
            pEmailEx.classList.add('active')
            spans[1].classList.remove('rightEmail')


        }



    })





  


 