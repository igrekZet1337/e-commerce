import { Component } from '@angular/core';
import { Observable, map, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Hello World';

  constructor() {}

  

  ngOnInit() {
    const obs$ = fromTimestamp();

    obs$.subscribe({
      next: value => console.log(value)
    })
    obs$.subscribe({
      next: value => console.log(value)
    })
  }
}

const fromTimestamp = (): Observable<number> => {
  return new Observable((subscriber) => {
    const timestamp = Date.now();
    subscriber.next(timestamp)
  });
}
