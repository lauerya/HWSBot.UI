import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EbaySearchComponent } from './ebay-search.component';

describe('EbaySearchComponent', () => {
  let component: EbaySearchComponent;
  let fixture: ComponentFixture<EbaySearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EbaySearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EbaySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
