import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogMapDebtorComponent } from './dialog-map-debtor.component';

describe('DialogMapDebtorComponent', () => {
  let component: DialogMapDebtorComponent;
  let fixture: ComponentFixture<DialogMapDebtorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogMapDebtorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogMapDebtorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
