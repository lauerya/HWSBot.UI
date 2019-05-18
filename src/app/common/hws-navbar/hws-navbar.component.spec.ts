import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HwsNavbarComponent } from './hws-navbar.component';

describe('HwsNavbarComponent', () => {
  let component: HwsNavbarComponent;
  let fixture: ComponentFixture<HwsNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HwsNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HwsNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
