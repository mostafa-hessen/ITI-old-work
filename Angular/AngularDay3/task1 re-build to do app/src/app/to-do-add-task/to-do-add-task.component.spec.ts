import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoAddTaskComponent } from './to-do-add-task.component';

describe('ToDoAddTaskComponent', () => {
  let component: ToDoAddTaskComponent;
  let fixture: ComponentFixture<ToDoAddTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoAddTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoAddTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
