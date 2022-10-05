import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayGuitarProductsComponent } from './display-guitar-products.component';

describe('DisplayGuitarProductsComponent', () => {
  let component: DisplayGuitarProductsComponent;
  let fixture: ComponentFixture<DisplayGuitarProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayGuitarProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayGuitarProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
