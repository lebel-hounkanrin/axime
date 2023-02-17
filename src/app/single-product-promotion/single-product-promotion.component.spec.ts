import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProductPromotionComponent } from './single-product-promotion.component';

describe('SingleProductPromotionComponent', () => {
  let component: SingleProductPromotionComponent;
  let fixture: ComponentFixture<SingleProductPromotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleProductPromotionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleProductPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
