import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteTemperatureComponent } from './note-temperature.component';

describe('NoteTemperatureComponent', () => {
  let component: NoteTemperatureComponent;
  let fixture: ComponentFixture<NoteTemperatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteTemperatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteTemperatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
