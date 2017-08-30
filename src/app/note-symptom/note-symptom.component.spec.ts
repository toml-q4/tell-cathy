import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteSymptomComponent } from './note-symptom.component';

describe('NoteSymptomComponent', () => {
  let component: NoteSymptomComponent;
  let fixture: ComponentFixture<NoteSymptomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteSymptomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteSymptomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
