import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';

import {QueryService} from '../query.service';
import {QueryCommunicate} from '../query.communicate';

import {Tramite, TramiteMovimiento} from '../../models/tramite';
 
import {GenericFormComponent} from '../../directives-component/components/generic-form.component';

declare var $: any;

@Component({
  selector: 'historial_modal',
  templateUrl: './historial_modal.component.html'
})
export class HistorialModalComponent extends GenericFormComponent implements OnInit, OnDestroy {
  @ViewChild('historialModal') el:ElementRef;
    
  public show: boolean= false;
  public tramite: Tramite;
  public movimientos: TramiteMovimiento[];
  public params: any = {pagina: 1, porPagina: 10, order: 'fecha desc'};
  
  public cant: number = 25;
  
  //Observables
  private movimientosModal: any;
    
  constructor(private queryService: QueryService, private queryCommunicate: QueryCommunicate) {
    super();
  }

  ngOnInit() {
      this.movimientosModal = this.queryCommunicate.historialModalPop$.subscribe(
        (tramite: Tramite) => {
            this.tramite= tramite;
            this.load();
            this.filter();
        });
        
    $(this.el.nativeElement).on('hidden.bs.modal', (e) => {
        this.show= false;
    });
  }
  
  public filter(pagina?: number){
    this.params.pagina = pagina || this.params.pagina;
    this.queryService.movimientos(this.tramite.id_tramite, this.params).subscribe(
        movimientos => {
            this.movimientos= movimientos.data;
            this.assemblePager(movimientos.info);
        }
    );
  }
      
  //MODAL
  public load(){
    this.show= true;
    $(this.el.nativeElement).modal();
  }
  public hide(){
    $(this.el.nativeElement).modal("hide");
    this.show= false;
  }
  
  //OnDestroy
  ngOnDestroy() {
    this.movimientosModal.unsubscribe();
  }
}