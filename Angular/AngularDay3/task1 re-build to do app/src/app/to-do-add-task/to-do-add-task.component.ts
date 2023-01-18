import { Component ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-to-do-add-task',
  templateUrl: './to-do-add-task.component.html',
  styleUrls: ['./to-do-add-task.component.css']
})
export class ToDoAddTaskComponent {
@Output() getChangInputFromChiled= new EventEmitter()
@Output() getTaskInputFromChiled = new EventEmitter()


sendToParent(e:any){
  this.getChangInputFromChiled.emit(e)
}

sendToParentTask(event:any){
  this.getTaskInputFromChiled.emit(event)
}
}
