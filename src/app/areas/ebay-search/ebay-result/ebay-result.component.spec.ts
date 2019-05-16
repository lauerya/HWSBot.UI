import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EbayResultComponent } from './ebay-result.component';

describe('EbayResultComponent', () => {
  let component: EbayResultComponent;
  let fixture: ComponentFixture<EbayResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EbayResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EbayResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
