import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteNewMedicineComponent } from './note-new-medicine.component';

describe('NoteNewMedicineComponent', () => {
  let component: NoteNewMedicineComponent;
  let fixture: ComponentFixture<NoteNewMedicineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteNewMedicineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteNewMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
