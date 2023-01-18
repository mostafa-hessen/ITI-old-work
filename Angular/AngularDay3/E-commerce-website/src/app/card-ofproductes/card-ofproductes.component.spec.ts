import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOFProductesComponent } from './card-ofproductes.component';

describe('CardOFProductesComponent', () => {
  let component: CardOFProductesComponent;
  let fixture: ComponentFixture<CardOFProductesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardOFProductesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardOFProductesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
