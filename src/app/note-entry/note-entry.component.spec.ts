import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteEntryComponent } from './note-entry.component';

describe('NoteEntryComponent', () => {
  let component: NoteEntryComponent;
  let fixture: ComponentFixture<NoteEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
