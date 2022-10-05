import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDjEquipmentProductsComponent } from './display-dj-equipment-products.component';

describe('DisplayDjEquipmentProductsComponent', () => {
  let component: DisplayDjEquipmentProductsComponent;
  let fixture: ComponentFixture<DisplayDjEquipmentProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayDjEquipmentProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayDjEquipmentProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
