import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTaylorProductsComponent } from './display-taylor-products.component';

describe('DisplayTaylorProductsComponent', () => {
  let component: DisplayTaylorProductsComponent;
  let fixture: ComponentFixture<DisplayTaylorProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayTaylorProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayTaylorProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
