import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvtocardComponent } from './avtocard.component';

describe('AvtocardComponent', () => {
  let component: AvtocardComponent;
  let fixture: ComponentFixture<AvtocardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvtocardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvtocardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
