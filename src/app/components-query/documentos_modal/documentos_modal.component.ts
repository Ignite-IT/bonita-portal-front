import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';

//import {environment} from '../../../environments/environment';

import {DocumentacionService} from '../../services/documentacion.service';
import {QueryCommunicate} from '../query.communicate';

import {Tramite} from '../../models/tramite';
import {Documento} from '../../models/documento';
 
import {GenericFormComponent} from '../../directives-component/components/generic-form.component';

declare var $: any;

@Component({
  selector: 'documentos_modal',
  templateUrl: './documentos_modal.component.html'
})
export class DocumentosModalComponent extends GenericFormComponent implements OnInit, OnDestroy {
  @ViewChild('documentosModal') el:ElementRef;
    
  public show: boolean= false;
  public tramite: Tramite;
  public documentos: Documento[];
  public params: any = {pagina: 1, porPagina: 10, order: 'id_documento desc'};
  
  public documento: Documento;
  
//  public codigoReemplaza: number = environment.estadoReemplazado;
  
  //Observables
  private documentosModal: any;
    
  constructor(private documentacionService: DocumentacionService, private queryCommunicate: QueryCommunicate) {
    super();
  }

  ngOnInit() {
      this.documentosModal = this.queryCommunicate.documentacionModalPop$.subscribe(
        (tramite: Tramite) => {
            this.tramite= tramite;
            this.load();
            this.filter();
        });
        
    $(this.el.nativeElement).on('hidden.bs.modal', (e) => {
        this.show= false;
    });
  }
  
  public filter(pagina?: number) {
    this.params.pagina = pagina || this.params.pagina;
    this.documentacionService.documentosTramite(this.tramite.id_tramite, this.params).subscribe(
        documentos => {
            this.documentos= documentos.data;
            this.assemblePager(documentos.info);
        }
    );
  }
  
  //
  //ACCIONES
//  nuevoDocumento(){
//    this.documento = new Documento();
//    this.documento.cod_actividad = this.tramite.cod_actividad;
//    this.documento.id_tramite = this.tramite.id_tramite;
//    this.documento.usuario = 'Usuario';
//    this.documento.grupo = 'Grupo';
//  }
//  
//  reemplazarDocumento(documento: Documento){
//    this.documento = new Documento();
//    this.documento.cod_actividad = this.tramite.cod_actividad;
//    this.documento.id_tramite = this.tramite.id_tramite;
//    this.documento.reemplaza = documento.id_documento;
//    this.documento.usuario = 'Usuario';
//    this.documento.grupo = 'Grupo';
//  }
//  
//  modificarDocumento(documento: Documento){
//    this.documento = new Documento(documento);
//  }
  
  verDocumento(documento: Documento){
    this.documentacionService.verDocumento(documento.id_documento);
  }
  
  //Desde el formulario
  public actualizarDocumento(documento: Documento): void {
    let exists= false;
    this.documentos.forEach(function(documentoFor, index, object) {
        if (documentoFor.id_documento == documento.id_documento) {
            object[index]= documento;
            exists= true;
        }
    });
    if(!exists){
        this.documentos.splice(0, 0, documento);
    }
    this.cancelarDocumento();
  }    
  public cancelarDocumento(event?): void{
    this.documento= null;
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
    this.documentosModal.unsubscribe();
  }
}