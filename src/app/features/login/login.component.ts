import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, throttleTime } from 'rxjs';
import { confirmPassword } from 'src/app/shared/validators/auth.validator';

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
      passwordGroup: new FormGroup({
        password: new FormControl(),
        confirmPassword: new FormControl(),
      }),
      firstName: new FormControl(),
      sendNotifications: new FormControl(),
    });
  }
  
  ngOnInit(): void {
    
    this.loginForm = new FormGroup({
      login: new FormControl<string>(''),
      passwordGroup: new FormGroup({
        password: new FormControl<string>('', [Validators.required]),
        confirmPassword: new FormControl<string>('', [Validators.required]),
      }, confirmPassword),
      firstName: new FormControl<string>(''),
      notification: new FormControl<string>('Email'),
      addressArray: new FormArray<FormGroup>([this.buildAddress()])
    });


    this.loginForm.get('notification')?.valueChanges.pipe().subscribe(result => console.log(result));
  }

  get addresses(): FormArray {
    return <FormArray>this.loginForm.get('addressArray');
  }
  addAddress() {
    this.addresses.push(this.buildAddress());
  }

  buildAddress(): FormGroup {
    return new FormGroup({
        inputAddress1: new FormControl<string>(''),
        inputAddress2: new FormControl<string>(''),
        inputState: new FormControl<string>('')
      })
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
