import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CarsComponent} from './admin/cars/cars.component';
import {AdminGuard} from './auth/admin.guard';
import {UserComponent} from 'ngx-auth-firebaseui';
import {BookComponent} from './public/order/book.component';

const routes: Routes = [
  {
    path: 'admin', children: [
      {path: 'cars', component: CarsComponent},
      {path: '', redirectTo: 'cars', pathMatch: 'full'},
    ],
    canActivate: [AdminGuard]
  },
  {path: 'account', component: UserComponent},
  {path: 'book', component: BookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
