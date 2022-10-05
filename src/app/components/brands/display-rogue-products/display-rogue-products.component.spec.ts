import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayRogueProductsComponent } from './display-rogue-products.component';

describe('DisplayRogueProductsComponent', () => {
  let component: DisplayRogueProductsComponent;
  let fixture: ComponentFixture<DisplayRogueProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayRogueProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayRogueProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
