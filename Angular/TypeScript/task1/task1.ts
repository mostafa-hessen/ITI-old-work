class Vehicle
{
    color : string;
    type : string;


}

class Car extends Vehicle{

    price:number;
     
    constructor(color:string,type:string,price:number){
        super()
       
           alert(` color is ${this.color=color} , type is ${this.type=type}, price is ${this.price=price}`)
        

    }
}

let  instance1= new Car("black" ,  "PMW" , 1000000)
let  instance2= new Car("red" ,  "kia" , 300000)
 