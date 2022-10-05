import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPianoProductsComponent } from './display-piano-products.component';

describe('DisplayPianoProductsComponent', () => {
  let component: DisplayPianoProductsComponent;
  let fixture: ComponentFixture<DisplayPianoProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayPianoProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayPianoProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
