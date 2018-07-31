import { Component, OnInit } from '@angular/core';

import {environment} from '../../../environments/environment';

import {QueryService} from '../query.service';
import {QueryCommunicate} from '../query.communicate';

import {Tramite} from '../../models/tramite';
import {Grupo, Actividad} from '../models';

import {GenericFormComponent} from '../../directives-component/components/generic-form.component';

@Component({
  selector: 'tramites',
  templateUrl: './tramites.component.html'
})
export class TramitesComponent extends GenericFormComponent implements OnInit {
  public datos: any[] = [];
  public grupos: Grupo[]  = [];
  public actividades: Actividad[]  = [];
  public params: any = {t_matricula: null, t_cuil: null, t_estado: null, s_tipo_prestamo: null, tm_grupo: null, tm_cod_actividad: null };

  public tiposPrestamo: any[] = environment.tiposPrestamo;

  constructor(private queryService: QueryService, protected queryCommunicate: QueryCommunicate) {
    super();
  }

  ngOnInit() {
    this.filter();
    
    this.queryService.grupos().subscribe(
        (grupos: Grupo[]) => {this.grupos = grupos;}
    );
    
    this.queryService.actividades().subscribe(
        (actividades: Actividad[]) => {this.actividades = actividades;}
    );
  }
  
  /** Si no se le pasa pagina actualiza en la que esta */
  public filter(page?, event?){
    this.cursorWait();    
    this.queryService.queryTramites(this.params).subscribe(
        (datos) => {
            this.cursorDefault();
            this.datos = datos;
        },
        error => {
            this.cursorDefault();
        }
    )
  }
  
  public resetFilter(){
    this.params = {t_matricula: null, t_cuil: null, t_estado: null, s_tipo_prestamo: null, tm_grupo: null, tm_cod_actividad: null };
    this.filter();
  }  
  
  //
  //ACCIONES
  verSolicitud(dato: any) {    
    this.queryCommunicate.solicitudModalPopUp(this.generarTramite(dato));
  }
  
  documentacion(dato: any) {    
    this.queryCommunicate.documentacionModalPopUp(this.generarTramite(dato));
  }
  
  historial(dato: any) {    
    this.queryCommunicate.historialModalPopUp(this.generarTramite(dato));
  }

  
  //
  //UTILS
  public generarTramite(dato: any) {
    let tramite = new Tramite();
    tramite.id_tramite = dato.id_tramite;
    tramite.matricula = dato.matricula;
    tramite.cuil = dato.cuil;
    return tramite;
  }
  
  public getTipoPrestamo(key: number) {
    let tipos = this.tiposPrestamo.filter(t => t.key == key);
    if (tipos.length > 0){
        return tipos[0].value;
    }
    return null;
  }
}