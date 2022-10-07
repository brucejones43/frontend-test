import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileComponent } from './wishList.component';


describe('userProfileComponent', () => {
  let component: wishListComponent;
  let fixture: ComponentFixture<wishListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(wishListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 
});