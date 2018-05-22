import { Component, OnInit } from '@angular/core';

import {BonitaService} from '../bonita.service';

import {GenericFormComponent} from '../../directives-component/components/generic-form.component';

import {Case} from '../../models/bonita';

@Component({
  selector: 'cases',
  templateUrl: './cases.component.html'
})
export class CasesComponent extends GenericFormComponent implements OnInit {
  public cases: Case[] = [];
  public params: any = {s: null};

  constructor(private bonitaService: BonitaService) {
    super();
  }

  ngOnInit() {
    this.filter();
  }
  
  /** Si no se le pasa pagina actualiza en la que esta */
  public filter(page?, event?){
    this.cursorWait();    
    this.bonitaService.cases(this.params).subscribe(
        (cases) => {
            this.cursorDefault();
            this.cases = cases;
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
}