import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayWoodwindsProductsComponent } from './display-woodwinds-products.component';

describe('DisplayWoodwindsProductsComponent', () => {
  let component: DisplayWoodwindsProductsComponent;
  let fixture: ComponentFixture<DisplayWoodwindsProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayWoodwindsProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayWoodwindsProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
