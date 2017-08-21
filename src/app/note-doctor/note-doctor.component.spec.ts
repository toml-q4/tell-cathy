import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteDoctorComponent } from './note-doctor.component';

describe('NoteDoctorComponent', () => {
  let component: NoteDoctorComponent;
  let fixture: ComponentFixture<NoteDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
