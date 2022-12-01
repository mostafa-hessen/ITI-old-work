// task 1

let jsTipsArr=[
    "Don’t forget var keyword when assigning a variable’s value for the first time.",
    "use === instead of ==",
    "Use Semicolons for line termination",
    "Create an object constructor",
    "Be careful when using typeof, instanceof and constructor.",
    "Create a Self-calling Function",
    "Get a random item from an array",
    "Get a random number in a specific range",
    "Generate an array of numbers with numbers from 0 to max ",
    "Generate a random set of alphanumeric characters"
]

let jsTipsH1=document.getElementById('jsTips')
jsTipsH1.innerHTML = jsTipsArr[Math.trunc(Math.random()*10)]



// task-2

let btn=document.getElementById('btnDate')
let dateContainer=document.getElementById('dateContainer')
btn.addEventListener('click',()=>{
    let date= new Date();
    dateContainer.innerHTML=`${date.getDate()}/${date.getMonth()}/${date.getFullYear() } <br> <br>  
    ${date.getHours()}:${date.getMinutes()} 
    `
})


// task 3

function errore(){

    // alert('your photo have errore')
    let pOfImage=document.getElementById('pOfImage').innerHTML="your photo have errore"
}

try {
    if(x == "")  throw "is empty";
    if(isNaN(x)) throw "is not a number";
    x = Number(x);
    if(x > 10)   throw "is too high";
    if(x < 5)  throw "is too low";
  }
  catch(err) {
    document.getElementById("demo").innerHTML = err.message;
    // errore()
  }










// task 4
let datePrrmpot=prompt("enter date with - as seperator ")
function mydate(date){

    console.log(date.length)
    let arrDate=date.split('-')
   let  dateObj=new Date()
   date.length==10&&arrDate[0].length==2&&arrDate[1].length==2&&arrDate[2].length==4? alert(`date of this day${dateObj.getDate()}/${dateObj.getMonth()}/${dateObj.getFullYear()}`):alert("Wong Date Format");
}
mydate(datePrrmpot)

// task 5 =>Make a function that accepts array and number and return how many times this number found in the arraylet
 let count =0;
function howMany(arr,number){

    arr.forEach(element => {

        element==number?count++:''
        
    });
    console.log("task5===>",count)
}
howMany([1,2,3,1,3,6,4,5],6)



// task 6 Make a function that accept array and character then remove this character from the array

function remove(arr,char){

console.log("task6===>",arr.join("").replaceAll(char,"").split(''))

}
remove(['a','b','c','a','d','a','b','d'],'a')

 


