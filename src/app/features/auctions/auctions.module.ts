import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuctionsRoutingModule } from './auctions-routing.module';
import { AuctionsComponent } from './auctions.component';
import { SearchSidebarComponent } from './search-sidebar/search-sidebar.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    AuctionsComponent,
    SearchSidebarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuctionsRoutingModule
  ]
})
export class AuctionsModule { }
