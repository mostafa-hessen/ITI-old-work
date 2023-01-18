import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { Task2ToDoListComponent } from './task2-to-do-list/task2-to-do-list.component';
import { ToDoAddTaskComponent } from './to-do-add-task/to-do-add-task.component';
import { ToDoFooterComponent } from './to-do-footer/to-do-footer.component';
import { TasksComponent } from './tasks/tasks.component';
 

@NgModule({
  declarations: [
    AppComponent,
    // Task2ToDoListComponent,
    ToDoAddTaskComponent,
    ToDoFooterComponent,
    TasksComponent,
   
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
