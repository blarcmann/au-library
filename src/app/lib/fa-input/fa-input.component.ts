import { Component, OnInit, Input, ContentChild, AfterContentInit, HostListener, ViewEncapsulation } from '@angular/core';
import { InputRefDirective } from '../common/input-ref.directive';

@Component({
  selector: 'fa-input',
  encapsulation: ViewEncapsulation.Emulated,
  templateUrl: './fa-input.component.html',
  styleUrls: ['./fa-input.component.css']
})
export class FaInputComponent implements AfterContentInit {
  @Input() icon: string;
  @ContentChild(InputRefDirective)
  input: InputRefDirective;

  constructor() { }

  ngAfterContentInit() {
    if(!this.input) {
      console.error('the fa-input component needs an input el inside its content... aii?')
    }
  }

  @HostListener('class.input-focus')
  get isInputFocus() {
    return this.input ? this.input.focus : false;
  }

  get classes() {
    const cssClasses = {
      'fa': true
    }
    if(this.icon) {
      cssClasses['fa-' + this.icon] = true;
    }

    return cssClasses;
  }

}
