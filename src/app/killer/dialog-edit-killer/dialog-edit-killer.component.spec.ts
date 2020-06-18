import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditKillerComponent } from './dialog-edit-killer.component';

describe('DialogEditKillerComponent', () => {
  let component: DialogEditKillerComponent;
  let fixture: ComponentFixture<DialogEditKillerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogEditKillerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEditKillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
