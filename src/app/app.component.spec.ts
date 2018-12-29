import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FaInputComponent } from './lib/fa-input/fa-input.component';
import { InputRefDirective } from './lib/common/input-ref.directive';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';


describe('AppComponent', () => {

  let component: AppComponent,
    fixture: ComponentFixture<AppComponent>,
    el: DebugElement,
    emailField: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        FaInputComponent,
        InputRefDirective
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    el = fixture.debugElement;
    emailField = el.query(By.css('#email-field'));
    fixture.detectChanges();
  })


  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it(`should create a font awesome email input`, async(() => {
    expect(emailField).toBeTruthy();
  }))
  it(`should include the correct icon as specified`, async(() => {
    console.log(emailField.nativeElement.outerHTML);
    expect(emailField.query(By.css('i.fa-icon.fa.fa-envelope'))).toBeTruthy();
  }))
  it(`should have projected the correct test input inside the assigned field`, async(() => {
    expect(emailField.query(By.css('input.test-class'))).toBeTruthy();
  }))
});
