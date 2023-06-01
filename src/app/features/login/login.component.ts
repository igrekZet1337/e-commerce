import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthValidator } from 'src/app/shared/validators/auth.validator';

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
      password: new FormControl<string>('', [Validators.required, AuthValidator()]),
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
