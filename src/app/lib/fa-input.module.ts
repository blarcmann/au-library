import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaInputComponent } from './fa-input/fa-input.component';
import { InputRefDirective } from './common/input-ref.directive';

@NgModule({
    declarations: [
        FaInputComponent, 
        InputRefDirective
    ],
    imports: [ 
        CommonModule 
    ],
    exports: [
        FaInputComponent,
        InputRefDirective
    ],
    providers: [],
})
export class FaInputModule {}

