import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task3CalculatoreComponent } from './task3-calculatore.component';

describe('Task3CalculatoreComponent', () => {
  let component: Task3CalculatoreComponent;
  let fixture: ComponentFixture<Task3CalculatoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Task3CalculatoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Task3CalculatoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
