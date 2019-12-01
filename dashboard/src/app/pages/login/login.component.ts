import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  moduleId: module.id,
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  tryLogin() {
    this.router.navigate(['/dashboard']);
  }

}
