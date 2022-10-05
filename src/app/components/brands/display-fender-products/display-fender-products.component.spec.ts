import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayFenderProductsComponent } from './display-fender-products.component';

describe('DisplayFenderProductsComponent', () => {
  let component: DisplayFenderProductsComponent;
  let fixture: ComponentFixture<DisplayFenderProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayFenderProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayFenderProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
