import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async () => {
    const titleStub = () => ({ setTitle: (string: any) => ({}) });
    const routerStub = () => ({ navigate: (array: any) => ({}) });
    const productServiceStub = () => ({
      getUserCart: () => ({ subscribe: (f: (arg0: {}) => any) => f({}) }),
      getCartItems: () => ({ subscribe: (f: (arg0: {}) => any) => f({}) }),
      setCart: (cart: any) => ({})
    });
    await TestBed.configureTestingModule({
      declarations: [ CartComponent ],
      providers: [
        { provide: Title, useFactory: titleStub },
        { provide: Router, useFactory: routerStub },
        { provide: ProductService, useFactory: productServiceStub }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`products has default value`, () => {
    expect(component.products).toEqual([]);
  });

  it(`cartProducts has default value`, () => {
    expect(component.cartProducts).toEqual([]);
  });

  it(`cartProducts has default value`, () => {
    const fixture = TestBed.createComponent(CartComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#cart-table')?.textContent).toContain('ID')
  });
  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const routerStub: Router = fixture.debugElement.injector.get(Router);
      const productServiceStub: ProductService = fixture.debugElement.injector.get(
        ProductService
      );
      spyOn(routerStub, 'navigate').and.callThrough();
      spyOn(productServiceStub, 'getUserCart').and.callThrough();
      spyOn(productServiceStub, 'getCartItems').and.callThrough();
      component.ngOnInit();
      expect(routerStub.navigate).toHaveBeenCalled();
      expect(productServiceStub.getUserCart).toHaveBeenCalled();
      expect(productServiceStub.getCartItems).toHaveBeenCalled();
    });
  });

  describe('emptyCart', () => {
    it('makes expected calls', () => {
      const routerStub: Router = fixture.debugElement.injector.get(Router);
      const productServiceStub: ProductService = fixture.debugElement.injector.get(
        ProductService
      );
      spyOn(routerStub, 'navigate').and.callThrough();
      spyOn(productServiceStub, 'setCart').and.callThrough();
      component.emptyCart();
      expect(routerStub.navigate).toHaveBeenCalled();
      expect(productServiceStub.setCart).toHaveBeenCalled();
    });
  });

});
