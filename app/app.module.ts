import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';


import {rootRouterConfig} from './app.routes';
import {AppComponent} from './app.component';
import {NavbarComponent} from './nav/navbar.component';
import {ProductsComponent} from './view/products.component';
import {OrdersComponent} from './view/orders.component';
import {MembersComponent} from './members/members.component';
import {SearchComponent} from './search/search.component';

import {PersonComponent} from './members/person/person.component';
import {MembersService} from './services/members.service';

@NgModule({
  declarations: [AppComponent, NavbarComponent, ProductsComponent, OrdersComponent, MembersComponent, PersonComponent, SearchComponent],
  imports     : [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(rootRouterConfig)],
  providers   : [MembersService],
  bootstrap   : [AppComponent]
})
export class AppModule {

}
