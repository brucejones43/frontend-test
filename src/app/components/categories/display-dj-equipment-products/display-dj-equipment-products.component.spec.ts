import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

import { DisplayDjEquipmentProductsComponent } from './display-dj-equipment-products.component';

describe('DisplayDjEquipmentProductsComponent', () => {
  let component: DisplayDjEquipmentProductsComponent;
  let fixture: ComponentFixture<DisplayDjEquipmentProductsComponent>;

  beforeEach(async () => {
    const productServiceStub = () => ({
      getProductsByCategory: (_string: any) => ({ subscribe: (f: (arg0: {}) => any) => f({}) })
    });

    const routerStub = () => ({ navigate: (_array: any) => ({}) });
    const titleStub = () => ({ setTitle: (_string: any) => ({}) });
    await TestBed.configureTestingModule({
      declarations: [ DisplayDjEquipmentProductsComponent ],
      providers: [
        { provide: ProductService, useFactory: productServiceStub },
        { provide: Router, useFactory: routerStub },
        { provide: Title, useFactory: titleStub }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayDjEquipmentProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`allProducts has default value`, () => {
    expect(component.allProducts).toEqual([]);
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const productServiceStub: ProductService = fixture.debugElement.injector.get(
        ProductService
      );
      const routerStub: Router = fixture.debugElement.injector.get(Router);
      spyOn(productServiceStub, 'getProductsByCategory').and.callThrough();
      spyOn(routerStub, 'navigate').and.callThrough();
      component.ngOnInit();
      expect(productServiceStub.getProductsByCategory).toHaveBeenCalled();
      expect(routerStub.navigate).toHaveBeenCalled();
    });
  });
});
