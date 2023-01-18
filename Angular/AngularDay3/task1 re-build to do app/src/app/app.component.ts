import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulartask1';
  rgex: any = /^\w/ig;
  currentValue: string = "";
  id: number = 0;
  arrayOFValues: any = [];
  
  ubdateValue(args: any) {
    this.currentValue = args.target.value;
    args.target.value = ""
  };

  getChangInputToParent(e:any){
    e.preventDefault();
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
 

  getArrayOfElementFromChildToParent(e:any){
     
console.log(e);

  }
 

}
