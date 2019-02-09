import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CarsComponent} from './admin/cars/cars.component';
import {AdminGuard} from './auth/admin.guard';
import {UserComponent} from 'ngx-auth-firebaseui';

const routes: Routes = [
  {
    path: 'admin', children: [
      {path: 'cars', component: CarsComponent},
      {path: '', redirectTo: 'cars', pathMatch: 'full'},
    ],
    canActivate: [AdminGuard]
  },
  {
    path: 'account', component: UserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
