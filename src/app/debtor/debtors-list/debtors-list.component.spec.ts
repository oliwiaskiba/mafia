import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtorsListComponent } from './debtors-list.component';

describe('DebtorsListComponent', () => {
  let component: DebtorsListComponent;
  let fixture: ComponentFixture<DebtorsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebtorsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebtorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
