import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {CarsComponent} from './cars/cars.component';
import {BookingsComponentComponent} from './bookings-component/bookings-component.component';
import {BookingRequestsComponent} from './booking-requests/booking-requests.component';
import {CarDetailComponent} from './car-detail/car-detail.component';
import {MessagesComponent} from './messages/messages.component';
import {FormsModule} from '@angular/forms';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {HttpClientModule} from '@angular/common/http';
import {InMemoryDataService} from './in-memory-data.service';
import {LayoutModule} from '@angular/cdk/layout';
import {
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatPaginatorModule,
  MatSelectModule,
  MatSidenavModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {AdminNavComponent} from './admin-nav/admin-nav.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {DeleteAreYouSureDialogComponent} from './cars/delete-are-you-sure-dialog/delete-are-you-sure-dialog.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    BookingsComponentComponent,
    BookingRequestsComponent,
    CarDetailComponent,
    MessagesComponent,
    AdminNavComponent,
    DeleteAreYouSureDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatDialogModule,
// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DeleteAreYouSureDialogComponent]
})
export class AppModule {
}
