import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EbayResultItemComponent } from './ebay-result-item.component';

describe('EbayResultItemComponent', () => {
  let component: EbayResultItemComponent;
  let fixture: ComponentFixture<EbayResultItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EbayResultItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EbayResultItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
