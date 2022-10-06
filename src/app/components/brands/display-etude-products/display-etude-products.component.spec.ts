import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayEtudeProductsComponent } from './display-etude-products.component';

describe('DisplayEtudeProductsComponent', () => {
  let component: DisplayEtudeProductsComponent;
  let fixture: ComponentFixture<DisplayEtudeProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayEtudeProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayEtudeProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
