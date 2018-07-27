import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard, NoLogin }   from './auth/authguard';

import { LoginComponent } from './login/login.component';
import { TasksComponent } from './components-bonita/tasks/tasks.component';
import { CasesComponent } from './components-bonita/cases/cases.component';
import { ProcessComponent } from './components-bonita/process/process.component';

import {TramitesComponent} from './components-query/tramites/tramites.component';

const routes: Routes =[
    { path: '', redirectTo: 'tasks', pathMatch: 'full' },
    { path: 'login', component: LoginComponent, data: {title: 'Login'}, canActivate: [NoLogin]},
    { path: 'tasks', component: TasksComponent, data: {title: 'Tareas'}, canActivate: [AuthGuard]},
    { path: 'cases', component: CasesComponent, data: {title: 'Casos'}, canActivate: [AuthGuard]},
    { path: 'process', component: ProcessComponent, data: {title: 'Procesos'}, canActivate: [AuthGuard]},
    
    { path: 'consultas', component: TramitesComponent, data: {title: 'Consultas'}, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
