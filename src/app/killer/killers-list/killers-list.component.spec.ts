import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KillersListComponent } from './killers-list.component';

describe('KillersListComponent', () => {
  let component: KillersListComponent;
  let fixture: ComponentFixture<KillersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KillersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KillersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
