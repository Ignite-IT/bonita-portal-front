import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {GlobalVars} from '../services/globalVars';
import {UserService} from '../services/user.service';

import {User} from '../models/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit{   
  user: User;

  constructor(private router: Router, private globalVars: GlobalVars, private userService: UserService) { }

  ngOnInit() {
    this.user = this.globalVars.getActualUser();
    
    //Me registro a los observer de login y logout
    //No es necesario asignar los eventos a ninguna variable y luego eliminarlos ya que el modulo se carga una unica vez
    this.userService.loginUser$.subscribe(
        user => {
            this.user= user;
        }
    );
    this.userService.logoutUser$.subscribe(
        user => {
            this.user= null;
            this.router.navigate(['/login']);
        }
    );
  }
  
  closeSession(){    
    this.userService.logout().subscribe();
  }
}