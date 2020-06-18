import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogForgiveComponent } from './dialog-forgive.component';

describe('DialogForgiveComponent', () => {
  let component: DialogForgiveComponent;
  let fixture: ComponentFixture<DialogForgiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogForgiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogForgiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
