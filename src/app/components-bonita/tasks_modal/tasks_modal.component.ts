import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';

import {SafeResourceUrl } from '@angular/platform-browser';

import {BonitaCommunicate} from '../bonita.communicate';

import {Task} from '../../models/bonita';
 
declare var $: any;

@Component({
  selector: 'tasks_modal',
  templateUrl: './tasks_modal.component.html'
})
export class TasksModalComponent implements OnInit, OnDestroy {
  @ViewChild('taskModal') el:ElementRef;
    
  public show: boolean= false;
  public task: Task;
  public url: SafeResourceUrl;
  
  //Observables
  private taskModal: any;
    
  constructor(private bonitaCommunicate: BonitaCommunicate) {
  }

  ngOnInit() {
    this.taskModal = this.bonitaCommunicate.taskModalPop$.subscribe(
        (data: any) => {            
            this.task = data.task;
            this.url = data.url;
            this.load();
        });
        
    $(this.el.nativeElement).on('hidden.bs.modal', (e) => {
        this.show= false;
        this.url = null;
        this.task = null;
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
    this.url = null;
    this.task = null;
  }
  
  //OnDestroy
  ngOnDestroy() {
    this.taskModal.unsubscribe();
  }
}