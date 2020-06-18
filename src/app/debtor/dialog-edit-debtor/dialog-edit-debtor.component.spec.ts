import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditDebtorComponent } from './dialog-edit-debtor.component';

describe('DialogEditDebtorComponent', () => {
  let component: DialogEditDebtorComponent;
  let fixture: ComponentFixture<DialogEditDebtorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogEditDebtorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEditDebtorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
