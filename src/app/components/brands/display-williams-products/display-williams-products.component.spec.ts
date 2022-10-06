import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayWilliamsProductsComponent } from './display-williams-products.component';

describe('DisplayWilliamsProductsComponent', () => {
  let component: DisplayWilliamsProductsComponent;
  let fixture: ComponentFixture<DisplayWilliamsProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayWilliamsProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayWilliamsProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
