import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverpreviewComponent } from './driverpreview.component';

describe('DriverpreviewComponent', () => {
  let component: DriverpreviewComponent;
  let fixture: ComponentFixture<DriverpreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverpreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverpreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
