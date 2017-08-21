import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteMedicineComponent } from './note-medicine.component';

describe('NoteMedicineComponent', () => {
  let component: NoteMedicineComponent;
  let fixture: ComponentFixture<NoteMedicineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteMedicineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
