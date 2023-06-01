import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Login } from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor() {
    this.loginForm = new FormGroup({
      login: new FormControl(),
      password: new FormControl(),
      firstName: new FormControl()
    });
  }
  
  ngOnInit(): void {
    
    this.loginForm = new FormGroup({
      login: new FormControl<string>(''),
      password: new FormControl<string>(''),
      firstName: new FormControl<string>('')
    });
  }

  save() {
    console.log(this.loginForm)
  }

  populateTestData(): void {
    this.loginForm.patchValue({
      firstName: 'Joe Doe',
      login: 'joedoe',
      password: 'xyz'
    })
  }
  
}
