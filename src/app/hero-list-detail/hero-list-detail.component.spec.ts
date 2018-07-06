import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroListDetailComponent } from './hero-list-detail.component';

describe('HeroListDetailComponent', () => {
  let component: HeroListDetailComponent;
  let fixture: ComponentFixture<HeroListDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroListDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroListDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
