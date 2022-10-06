import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayMartinProductsComponent } from './display-martin-products.component';

describe('DisplayMartinProductsComponent', () => {
  let component: DisplayMartinProductsComponent;
  let fixture: ComponentFixture<DisplayMartinProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayMartinProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayMartinProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
