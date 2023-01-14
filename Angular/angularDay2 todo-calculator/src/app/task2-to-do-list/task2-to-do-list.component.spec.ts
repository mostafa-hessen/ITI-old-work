import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task2ToDoListComponent } from './task2-to-do-list.component';

describe('Task2ToDoListComponent', () => {
  let component: Task2ToDoListComponent;
  let fixture: ComponentFixture<Task2ToDoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Task2ToDoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Task2ToDoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
