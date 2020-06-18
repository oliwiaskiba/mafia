import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogMapKillerComponent } from './dialog-map-killer.component';

describe('DialogMapKillerComponent', () => {
  let component: DialogMapKillerComponent;
  let fixture: ComponentFixture<DialogMapKillerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogMapKillerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogMapKillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
