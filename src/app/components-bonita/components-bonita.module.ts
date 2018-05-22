import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { DirectivesComponentModule } from '../directives-component/directives-component.module';

import {BonitaService} from './bonita.service';
import {BonitaCommunicate} from './bonita.communicate';

import { TasksComponent } from './tasks/tasks.component';
import {CasesComponent} from './cases/cases.component';
import {ProcessComponent} from './process/process.component';

import {TasksModalComponent} from './tasks_modal/tasks_modal.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    
    DirectivesComponentModule
  ],
  declarations: [
    TasksComponent,
    CasesComponent,
    ProcessComponent,
    
    TasksModalComponent
  ],
  providers: [
    BonitaService,
    BonitaCommunicate
  ],
  exports: [    
    TasksComponent,
    CasesComponent,
    ProcessComponent,
    
    TasksModalComponent
  ]
})
export class ComponentsBonitaModule { }
