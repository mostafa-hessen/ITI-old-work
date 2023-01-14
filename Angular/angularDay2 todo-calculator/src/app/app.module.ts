import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Task1Component } from './task1/task1.component';
import { Task2ToDoListComponent } from './task2-to-do-list/task2-to-do-list.component';
import { Task3CalculatoreComponent } from './task3-calculatore/task3-calculatore.component';
 

@NgModule({
  declarations: [
    AppComponent,
    Task1Component,
    Task2ToDoListComponent,
    Task3CalculatoreComponent,
   
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
