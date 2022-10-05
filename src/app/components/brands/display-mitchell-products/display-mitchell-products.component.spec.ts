import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayMitchellProductsComponent } from './display-mitchell-products.component';

describe('DisplayMitchellProductsComponent', () => {
  let component: DisplayMitchellProductsComponent;
  let fixture: ComponentFixture<DisplayMitchellProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayMitchellProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayMitchellProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
