import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment';

import {UserService} from '../services/user.service';

import {GenericFormComponent} from '../directives-component/components/generic-form.component';

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent extends GenericFormComponent {
  loginForm: any= {username: '', password: '', remember: false};

  constructor(private router: Router, private userService: UserService) {
    super();
  }

  ngOnInit() {
  }

  public login(event){
    this.beforeSubmit(event);
    this.userService.login(this.loginForm.username, this.loginForm.password).subscribe(
        rta => {
            this.showSuccess(rta);
            this.router.navigate([environment.defaultPage]);
        },err => {
            this.showError(err.error);
        }
    );
  } 
}
