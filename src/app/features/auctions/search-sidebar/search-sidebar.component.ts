import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'mt-search-sidebar',
  templateUrl: './search-sidebar.component.html',
  styleUrls: ['./search-sidebar.component.scss']
})
export class SearchSidebarComponent {
  searchForm = new FormGroup({});
  constructor() {

  }

  ngOnInit() {
    this.searchForm = new FormGroup( {
      brand: new FormControl(),
      model: new FormControl(),
      condition: new FormControl(),
      price: new FormControl(),
      year: new FormControl()
    })
  }


  onSubmit(): any {
    console.log(event)
  }
}
