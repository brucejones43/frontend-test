import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileComponent } from './userProfile.component';


describe('userProfileComponent', () => {
  let component: userProfileComponent;
  let fixture: ComponentFixture<userProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(userProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 
});