import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrivercardComponent } from './drivercard.component';

describe('DrivercardComponent', () => {
  let component: DrivercardComponent;
  let fixture: ComponentFixture<DrivercardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrivercardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrivercardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
