import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetingPageComponent } from './greeting-page.component';

describe('NavigationPageComponent', () => {
  let component: GreetingPageComponent;
  let fixture: ComponentFixture<GreetingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreetingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreetingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});