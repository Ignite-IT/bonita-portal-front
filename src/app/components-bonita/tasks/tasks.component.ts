import { Component, OnInit } from '@angular/core';

import {BonitaService} from '../bonita.service';

import {GenericFormComponent} from '../../directives-component/components/generic-form.component';


@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html'
})
export class TasksComponent extends GenericFormComponent implements OnInit {
  public tasks: any[] = [];
  public task: any = null;

  constructor(private bonitaService: BonitaService) {
    super();
  }

  ngOnInit() {
    this.bonitaService.tasks().subscribe(
        (tasks) => {
            this.tasks = tasks;
        }
    )
  }
}