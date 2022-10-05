import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayEpiphoneProductsComponent } from './display-epiphone-products.component';

describe('DisplayEpiphoneProductsComponent', () => {
  let component: DisplayEpiphoneProductsComponent;
  let fixture: ComponentFixture<DisplayEpiphoneProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayEpiphoneProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayEpiphoneProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
