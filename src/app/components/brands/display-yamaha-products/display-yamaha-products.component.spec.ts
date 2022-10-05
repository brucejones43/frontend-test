import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayYamahaProductsComponent } from './display-yamaha-products.component';

describe('DisplayYamahaProductsComponent', () => {
  let component: DisplayYamahaProductsComponent;
  let fixture: ComponentFixture<DisplayYamahaProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayYamahaProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayYamahaProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
