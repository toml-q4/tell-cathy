import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteMakePrivateComponent } from './note-make-private.component';

describe('NoteMakePrivateComponent', () => {
  let component: NoteMakePrivateComponent;
  let fixture: ComponentFixture<NoteMakePrivateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteMakePrivateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteMakePrivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
