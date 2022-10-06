import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayNumarkProductsComponent } from './display-numark-products.component';

describe('DisplayNumarkProductsComponent', () => {
  let component: DisplayNumarkProductsComponent;
  let fixture: ComponentFixture<DisplayNumarkProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayNumarkProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayNumarkProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
