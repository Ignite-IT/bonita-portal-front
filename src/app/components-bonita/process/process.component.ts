import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {BonitaService} from '../bonita.service';

import {GenericFormComponent} from '../../directives-component/components/generic-form.component';

import {Process} from '../../models/bonita';

@Component({
  selector: 'process',
  templateUrl: './process.component.html'
})
export class ProcessComponent extends GenericFormComponent implements OnInit {
  public processes: Process[] = [];
  public params: any = {s: null};

  constructor(private bonitaService: BonitaService, private router: Router) {
    super();
  }

  ngOnInit() {
    this.filter();
  }
  
  /** Si no se le pasa pagina actualiza en la que esta */
  public filter(page?, event?){
    this.cursorWait();    
    this.bonitaService.process(this.params).subscribe(
        (processes) => {
            this.cursorDefault();
            this.processes = processes;
        },
        error => {
            this.cursorDefault();
        }
    )
  }
  
  public resetFilter(){
    this.params = {s: null};
    this.filter();
  }
  
  //
  //ACCIONES
  public startCase(process: Process){
    this.beforeSubmitList();
    this.bonitaService.startCase(process.id).subscribe(
        (rta: any) => {
            this.showSuccess({msj: 'Caso iniciado correctamente'});
            setTimeout(() => {
                this.router.navigate(['/tasks']);
            }, 1000);
        },
        (error) => {
            this.showError({msj: 'Hubo un problema iniciando el casi'});
        }
    );
  }
}