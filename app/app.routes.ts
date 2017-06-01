import {Routes} from '@angular/router';
import {ProductsComponent} from './view/products.component';
import {OrdersComponent} from './view/orders.component';
import {MembersComponent} from './members/members.component';
import {PersonComponent} from './members/person/person.component';


export const rootRouterConfig: Routes = [
  {path: '', redirectTo: 'products', pathMatch: 'full'},
  {path: 'products', component: ProductsComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'members', component: MembersComponent},
  {path: 'person/:id', component: PersonComponent}
];
