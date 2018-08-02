import { Component, OnInit, OnDestroy } from '@angular/core';

import {SafeResourceUrl } from '@angular/platform-browser';

import {BonitaService} from '../bonita.service';
import {GlobalVars} from '../../services/globalVars';
import {BonitaCommunicate} from '../bonita.communicate';

import {GenericFormComponent} from '../../directives-component/components/generic-form.component';

import {Task, Form} from '../../models/bonita';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html'
})
export class TasksComponent extends GenericFormComponent implements OnInit, OnDestroy {
  public tasks: Task[] = [];
  public params: any = {s: null};
  
  public task: Task = null;
  public url: SafeResourceUrl = null;

  //Observables
  private taskFinish: any;

  constructor(private bonitaService: BonitaService, private globalVars: GlobalVars, private bonitaCommunicate: BonitaCommunicate) {
    super();
  }

  ngOnInit() {
    this.filter();
    
    this.taskFinish = this.bonitaCommunicate.taskFinishPop$.subscribe(
        (data: any) => {            
            this.filter();
        }
    );
  }
  
  /** Si no se le pasa pagina actualiza en la que esta */
  public filter(page?, event?){
    this.cursorWait();    
    this.bonitaService.tasks(this.params).subscribe(
        (tasks) => {
            this.cursorDefault();
            this.tasks = tasks;
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
  public assign(task: Task){
    this.beforeSubmitList();
    this.bonitaService.assignTask(task.id, this.globalVars.actualUser.user_id).subscribe(
        (rta: any) => {
            this.showSuccess({msj: 'Tarea asignada correctamente'});
            task.assigned_id = this.globalVars.actualUser.user_id;
        },
        (error) => {
            this.showError({msj: 'Hubo un problema asignando la tarea'});
        }
    );
  }
  
  public unassign(task: Task){
    this.beforeSubmitList();
    this.bonitaService.unassignTask(task.id).subscribe(
        (rta: any) => {
            this.showSuccess({msj: 'Tarea asignada correctamente'});
            task.assigned_id = '';
        },
        (error) => {
            this.showError({msj: 'Hubo un problema asignando la tarea'});
        }
    );
  }
  
  public doTask(task: Task){
    this.task = task;
    this.beforeSubmitList();
    this.bonitaService.getFormOfTask(task).subscribe(
        (rta: Form) => {
            this.noShowSuccessList();
            let url: string = rta.url;
            if (url.indexOf('?')) {
                url += '&';
            } else {
                url += '?';
            }
            url += 'id=' + task.id + '&usuario=' + this.globalVars.getActualUser().user_name;
            this.url = this.globalVars.linkSanitizer(url);
            this.bonitaCommunicate.taskModalPopUp(this.task, this.url);
        },
        (error) => {
            this.showError({msj: 'Hubo un problema abriendo la tarea'});
        }
    );
  }
  
  //OnDestroy
  ngOnDestroy() {
    this.taskFinish.unsubscribe();
  }
}