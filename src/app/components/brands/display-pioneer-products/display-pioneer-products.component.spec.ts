import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPioneerProductsComponent } from './display-pioneer-products.component';

describe('DisplayPioneerProductsComponent', () => {
  let component: DisplayPioneerProductsComponent;
  let fixture: ComponentFixture<DisplayPioneerProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayPioneerProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayPioneerProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
