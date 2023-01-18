import { Component,Input ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  @Input() taskValue:any
  @Input() arrayOfTasks:any
  @Output() getArrayOfElementFromChild=new EventEmitter()


checked:any

  completed(id:any,e:any){
  console.log(this.arrayOfTasks);

    this.checked= this.arrayOfTasks.filter((ele: any) => {
      return ele.id == id
    })

    console.log(this.checked);
    
    if(this.checked[0].is_Checked)
    {
      this.checked[0].is_Checked=false
      
    }

    else{
      this.checked[0].is_Checked=true

    }
  }

sendArrayToParent(e:any){
  this.getArrayOfElementFromChild.emit(e)
}
 
}


