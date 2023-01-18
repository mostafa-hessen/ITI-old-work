import { Component } from '@angular/core';

@Component({
  selector: 'app-task3-calculatore',
  templateUrl: './task3-calculatore.component.html',
  styleUrls: ['./task3-calculatore.component.css']
})
export class Task3CalculatoreComponent {
  arrayOfClicked:any=[0]
  valueOfArray:any

  pushValue(value:any,checked:boolean=false){
   checked?"": this.valueOfArray=null
    console.log(this.arrayOfClicked);
    this.arrayOfClicked[0]==0|| this.arrayOfClicked[this.arrayOfClicked.length-1]=="="?this.arrayOfClicked=[]:""
    // value==Number?this.arrayOfClicked[0]=this.arrayOfClicked[0] +"+"+ value : 
    this.arrayOfClicked.push(value)

    // this.arrayOfClicked[0]==0|| this.arrayOfClicked[this.arrayOfClicked.length-1]=="="?"":
    console.log(this.valueOfArray);

    
  }


  getValue(){
    this.valueOfArray=  this.arrayOfClicked.reduce(  (accumulator:any, currentValue:any)=> {
      
      return accumulator + currentValue;
    }, 0);
   
    this.valueOfArray= eval(this.valueOfArray);
    this.pushValue("=",true)
    this.arrayOfClicked=[]
    
    

  }


  edite(){  this.arrayOfClicked.length>1?this.arrayOfClicked.pop():this.arrayOfClicked=[0]}


  clear(){ this.arrayOfClicked=[0];this.valueOfArray=null}
}

