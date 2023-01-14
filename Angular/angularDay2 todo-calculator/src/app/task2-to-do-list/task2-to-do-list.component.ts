import { Component } from '@angular/core';

@Component({
  selector: 'app-task2-to-do-list',
  templateUrl: './task2-to-do-list.component.html',
  styleUrls: ['./task2-to-do-list.component.css']
})
export class Task2ToDoListComponent {

  is_happend:boolean=true
  rgex: any = /^\w/ig;
  currentValue: string = "";
  id: number = 0;
  arrayOFValues: any = [];

  ubdateValue(args: any) {
    this.currentValue = args.target.value;
    args.target.value = ""
  };

  pushToArray(e: any) {
    e.preventDefault()
    if (this.currentValue.match(this.rgex)) {
      this.arrayOFValues.push({ taskName: this.currentValue, id: ++this.id,is_Checked:false });
      this.currentValue = ""
    }
    else {
      console.log("F");
      alert("must write digit or string")


    }
    console.log(this.currentValue, this.arrayOFValues);
  }


  delete(id: number, e: any) {
    e.preventDefault()
    console.log(id);
    this.arrayOFValues = this.arrayOFValues.filter((ele: any) => {
      return ele.id != id
    })

  }

checked:any
remove:string="no"
  completed(id:any,e:any){
  console.log(e);
  
    this.checked= this.arrayOFValues.filter((ele: any) => {
      return ele.id == id
    })
 this.arrayOFValues=[
  Object.assign( this.checked[0],{is_Checked:true}),
   ...this.arrayOFValues.filter((ele: any) => {
      return ele.id != id
    })
  ]
  console.log(this.arrayOFValues);
   
    
    // this.arrayOFValues=[ this.arrayOFValues,]
  }
}
