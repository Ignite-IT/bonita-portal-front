import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';

import {QueryService} from '../query.service';
import {QueryCommunicate} from '../query.communicate';
import {CpsmService} from '../../services/cpsm.service';

import {Tramite, SolicitudPrestamo} from '../../models/tramite';
import {MedioPago} from '../../models/cpsm';
 
import {GenericFormComponent} from '../../directives-component/components/generic-form.component';

declare var $: any;

@Component({
  selector: 'solicitud_modal',
  templateUrl: './solicitud_modal.component.html'
})
export class SolicitudModalComponent extends GenericFormComponent implements OnInit, OnDestroy{
  @ViewChild('solicitudModal') el:ElementRef;
    
  public show: boolean= false;
  public tramite: Tramite;
  public solicitud: SolicitudPrestamo;
  public extraDetalle = {forma_cobro: ''};
  
  //Observables
  private sollicitudModal: any;
    
  constructor(private queryService: QueryService, private queryCommunicate: QueryCommunicate, private cpsmService: CpsmService) {
    super();
  }

  ngOnInit() {
      this.sollicitudModal = this.queryCommunicate.solicitudModalPop$.subscribe(
        (tramite: Tramite) => {
            this.tramite= tramite;
            this.load();
            this.queryService.prestamoTramite(this.tramite.id_tramite).subscribe(
                (solicitud: SolicitudPrestamo) => {
                    this.solicitud= solicitud;
                    this.cpsmService.mediosPago(this.solicitud.concepto).subscribe(
                        (mediosPagos: MedioPago[]) => {
                            for (let medio of mediosPagos) {
                                if (medio.codigoMedioPago == Number(this.solicitud.forma_cobro)) {
                                    this.extraDetalle.forma_cobro = medio.descripcionMedioPago;
                                    break;
                                }
                            }
                        }
                    );
                },
                error => {
                    alert('El tramite todavia no cuenta con una solicitud de prestamo');
                }
            );
        });
        
    $(this.el.nativeElement).on('hidden.bs.modal', (e) => {
        this.show= false;
        this.solicitud= null;
    });
  }
  
  //MODAL
  public load(){
    this.show= true;
    $(this.el.nativeElement).modal();
  }
  public hide(){
    $(this.el.nativeElement).modal("hide");
    this.show= false;
    this.solicitud= null;
  }
  
  //OnDestroy
  ngOnDestroy() {
    this.sollicitudModal.unsubscribe();
  }
}