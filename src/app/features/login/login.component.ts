import { Component, OnInit } from '@angular/core';
import { Login } from './login';
import { NgForm } from '@angular/forms';
import { DataService } from './data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userSettings: Login = {
    firstName: '',
    password: '',
    login: ''
  }

  constructor(private dataService: DataService) {

  }



  ngOnInit(): void {
    
  }

  onSubmit(form: NgForm) {
    console.log('in onsubmit', form.valid)
    this.dataService.postUserSettingsForm(this.userSettings).subscribe(result => console.log('success', result), error => console.log('error', error));
  }

}
