import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { DirectivesComponentModule } from '../directives-component/directives-component.module';

import {BonitaService} from './bonita.service';

import { TasksComponent } from './tasks/tasks.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    
    DirectivesComponentModule
  ],
  declarations: [
    TasksComponent,
  ],
  providers: [
    BonitaService
  ],
  exports: [    
    TasksComponent,
  ]
})
export class ComponentsBonitaModule { }
