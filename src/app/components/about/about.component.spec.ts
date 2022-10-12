import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';
import { Title } from '@angular/platform-browser';
import { autoSpy } from 'auto-spy';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {    const a = setup().default();
    await TestBed.configureTestingModule({
      declarations: [ AboutComponent ]
    }).configureTestingModule({ providers: [{ provide: Title, useValue: a.titleService }] })
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
    it('when ngOnInit is called it should', () => {
        // arrange
        const { build } = setup().default();
        const a = build();
        // act
        a.ngOnInit();
        // assert
        // expect(a).toEqual
    });
});
function setup() {
    const titleService = autoSpy(Title);
    
    const builder = {
        titleService,
        default() {
            return builder;
        },
        build() {
            return new AboutComponent(titleService);
        }
    }
    return builder;
}