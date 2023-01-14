console.log("Slkjh tsc.cmd task2.ts –watch /");
var counterNumber=document.getElementById('counterNumber')
let increasebtn = document.querySelector('.increase')
let decreasebtn = document.querySelector('.decrease')
let reset= document.querySelector('.reset')
class Counter{
    counter=0;


    increase(){
        console.log();
        return ++this.counter
    }

    decrease(){
        // console.log(this.counter++);
        return --this.counter 
    }
    reset(){
        console.log(this.counter++);
        return this.counter=0 
    }
}
const myCounter = new Counter()
increasebtn?.addEventListener("click",()=>    counterNumber.innerHTML= myCounter.increase()  )
decreasebtn?.addEventListener("click",()=>    counterNumber.innerHTML= myCounter.decrease()  )
reset?.addEventListener("click",()=>    counterNumber.innerHTML= myCounter.reset()  )
