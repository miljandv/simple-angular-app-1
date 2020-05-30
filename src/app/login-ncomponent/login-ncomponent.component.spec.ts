import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginNComponentComponent } from './login-ncomponent.component';

describe('LoginNComponentComponent', () => {
  let component: LoginNComponentComponent;
  let fixture: ComponentFixture<LoginNComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginNComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginNComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
