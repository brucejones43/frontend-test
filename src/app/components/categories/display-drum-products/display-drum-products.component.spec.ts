import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDrumProductsComponent } from './display-drum-products.component';

describe('DisplayDrumProductsComponent', () => {
  let component: DisplayDrumProductsComponent;
  let fixture: ComponentFixture<DisplayDrumProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayDrumProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayDrumProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
