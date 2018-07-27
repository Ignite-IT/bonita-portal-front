import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

//GENERALES
import {GenericFormComponent} from './components/generic-form.component';
import {PagerComponent} from './components/pager/pager.component';

//GENERALES
import { ConfirmClickDirective }   from './directives/confirm_click.directive';

//GENERALES
import { FormatDatePipe }   from './directives/format-date.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    GenericFormComponent,
    PagerComponent,
  
    ConfirmClickDirective,
    
    FormatDatePipe,
  ],
  exports: [
    PagerComponent,
  
    ConfirmClickDirective,
    
    FormatDatePipe,
  ]
})
export class DirectivesComponentModule { }
