import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDrumProductsComponent } from './display-drum-products.component';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { autoSpy } from 'auto-spy';

describe('DisplayDrumProductsComponent', () => {
  let component: DisplayDrumProductsComponent;
  let fixture: ComponentFixture<DisplayDrumProductsComponent>;

  beforeEach(async () => {    const a = setup().default();
    await TestBed.configureTestingModule({
      declarations: [ DisplayDrumProductsComponent ]
    }).configureTestingModule({ providers: [{ provide: ProductService, useValue: a.productService },
            { provide: Router, useValue: a.router },
            { provide: Title, useValue: a.titleService }] })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayDrumProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
    it('when ngOnInit is called it should', () => {
        // arrange
        const { build } = setup().default();
        const d = build();
        // act
        d.ngOnInit();
        // assert
        // expect(d).toEqual
    });
});

function setup() {
    const productService = autoSpy(ProductService);
    
    const router = autoSpy(Router);
    router.navigate.and.returnValue(new Promise(res => {}));
    const titleService = autoSpy(Title);
    const builder = {
        productService,
        router,
        titleService,
        default() {
            return builder;
        },
        build() {
            return new DisplayDrumProductsComponent(productService, router, titleService);
        }
    }
    return builder;
}