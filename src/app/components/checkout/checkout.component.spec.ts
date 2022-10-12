import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutComponent } from './checkout.component';
import { ProductService } from 'src/app/services/product.service';
import { OrderService } from 'src/app/services/order.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { autoSpy } from 'auto-spy';

describe('CheckoutComponent', () => {
  let component: CheckoutComponent;
  let fixture: ComponentFixture<CheckoutComponent>;

  beforeEach(async () => {    const a = setup().default();
    await TestBed.configureTestingModule({
      declarations: [ CheckoutComponent ]
    }).configureTestingModule({ providers: [{ provide: ProductService, useValue: a.productService },
            { provide: OrderService, useValue: a.orderService },
            { provide: Router, useValue: a.router },
            { provide: Title, useValue: a.titleService }] })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
    it('when ngOnInit is called it should', () => {
        // arrange
        const { build } = setup().default();
        const c = build();
        // act
        c.ngOnInit();
        // assert
        // expect(c).toEqual
    });
    it('when onSubmit is called it should', () => {
        // arrange
        const { build } = setup().default();
        const c = build();
        // act
        c.onSubmit();
        // assert
        // expect(c).toEqual
    });
});

function setup() {
    const productService = autoSpy(ProductService);
    
    const orderService = autoSpy(OrderService);
    
    const router = autoSpy(Router);
    router.navigate.and.returnValue(new Promise(res => {}));
    const titleService = autoSpy(Title);
    const builder = {
        productService,
        orderService,
        router,
        titleService,
        default() {
            return builder;
        },
        build() {
            return new CheckoutComponent(productService, orderService, router, titleService);
        }
    }
    return builder;
}