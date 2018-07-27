import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { DirectivesComponentModule } from '../directives-component/directives-component.module';

import {QueryService} from './query.service';
import {QueryCommunicate} from './query.communicate';

import {TramitesComponent} from './tramites/tramites.component';

import {DocumentosModalComponent} from './documentos_modal/documentos_modal.component';
import {SolicitudModalComponent} from './solicitud_modal/solicitud_modal.component';
import {HistorialModalComponent} from './historial_modal/historial_modal.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    
    DirectivesComponentModule
  ],
  declarations: [
    TramitesComponent,
    
    DocumentosModalComponent,
    SolicitudModalComponent,
    HistorialModalComponent,
  ],
  providers: [
    QueryService,
    QueryCommunicate
  ],
  exports: [    
    TramitesComponent,
    
    DocumentosModalComponent,
    SolicitudModalComponent,
    HistorialModalComponent,
  ]
})
export class ComponentsQueryModule { }
