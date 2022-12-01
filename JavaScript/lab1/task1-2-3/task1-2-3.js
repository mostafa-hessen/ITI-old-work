
// Task1

let name = window.prompt("please enter your name")
if (isNaN(+name)) {
    h1.innerHTML = `welcome  ${name}`
}
else {



    alert('pleas inter yor name not your number😎')






    setTimeout(() => {
        document.location.reload(true)
    }, 300)
}









// Task2
let inputs = Array.from(document.querySelectorAll('.input'))
let arr = []


let btn = document.getElementById('btn')


  




let result1 = document.getElementById('result1')

// function sum(){
    
// }
btn.addEventListener('click', (e) => {
    e.preventDefault()
    inputs.forEach(ele => {
        let eleTransform = +ele.value
        isNaN(eleTransform) ? alert('you must write number only ') : arr.push(eleTransform)
    })

    result1.innerHTML = `Restult <br> ${arr[0] + arr[1]}`;
    arr = []
    console.log(arr);
})








































// task3


let inputExpression = document.getElementById('exprestion')
let btnCalculatExpression = document.getElementById('btnCalculatExpression')
let result2 = document.getElementById('result2')


btnCalculatExpression.addEventListener('click', (e) => {
    e.preventDefault()


    result2.innerHTML = `result <br> ${eval(  inputExpression.value  ) }`
 
})

