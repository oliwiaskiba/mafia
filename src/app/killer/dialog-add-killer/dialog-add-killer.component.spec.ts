import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddKillerComponent } from './dialog-add-killer.component';

describe('DialogAddKillerComponent', () => {
  let component: DialogAddKillerComponent;
  let fixture: ComponentFixture<DialogAddKillerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogAddKillerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddKillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
