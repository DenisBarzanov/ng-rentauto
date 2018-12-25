import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CarsComponent} from './cars/cars.component';
import {CarDetailComponent} from './car-detail/car-detail.component';

const routes: Routes = [
  {path: 'cars', component: CarsComponent},
  {path: 'cars/:id', component: CarDetailComponent},
  {path: '', redirectTo: 'cars', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
