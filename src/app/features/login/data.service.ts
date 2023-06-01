import { Injectable } from '@angular/core';
import { Login } from './login';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }


  postUserSettingsForm(userSettings: Login) : Observable<any> {
    return this.http.post<Login>('https://putsreq.com/fSVD7oP8zk2NMN1C1SRU', userSettings, {responseType: 'json' })

    // return of(userSettings);
  }
}
