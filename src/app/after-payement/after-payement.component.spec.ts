import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterPayementComponent } from './after-payement.component';

describe('AfterPayementComponent', () => {
  let component: AfterPayementComponent;
  let fixture: ComponentFixture<AfterPayementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfterPayementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfterPayementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
