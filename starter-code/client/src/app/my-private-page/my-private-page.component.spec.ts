import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPrivatePageComponent } from './my-private-page.component';

describe('MyPrivatePageComponent', () => {
  let component: MyPrivatePageComponent;
  let fixture: ComponentFixture<MyPrivatePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPrivatePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPrivatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
