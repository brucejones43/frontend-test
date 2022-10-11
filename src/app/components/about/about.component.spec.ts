import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`images has default value`, () => {
    expect(component.images).toEqual([]);
  });

  it(`selectedIndex has default value`, () => {
    expect(component.selectedIndex).toEqual(0);
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      spyOn(component, 'autoSlideImages').and.callThrough();
      component.ngOnInit();
      expect(component.autoSlideImages).toHaveBeenCalled();
    });
  });
  
});