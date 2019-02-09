import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {CarsComponent} from './admin/cars/cars.component';
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
import {NavComponent} from './nav/nav.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {DeleteAreYouSureDialogComponent} from './admin/cars/dialogs/delete-are-you-sure-dialog/delete-are-you-sure-dialog.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {NgxAuthFirebaseUIModule} from 'ngx-auth-firebaseui';
import {EditDialogComponent} from './admin/cars/dialogs/edit-dialog/edit-dialog.component';
import {EnumToArrayPipe} from './pipes/enum-to-array.pipe';


const config = {
  apiKey: 'AIzaSyCElJ96x_XME8tzUOnEdc8e4ly2kZSLvOY',
  authDomain: 'rent-a-car-sofia.firebaseapp.com',
  databaseURL: 'https://rent-a-car-sofia.firebaseio.com',
  projectId: 'rent-a-car-sofia',
  storageBucket: 'rent-a-car-sofia.appspot.com',
  messagingSenderId: '225322772548'
};

const dialogs = [
  DeleteAreYouSureDialogComponent,
  EditDialogComponent,
];

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    NavComponent,
    EnumToArrayPipe,
    ...dialogs
  ],
  imports: [
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule,

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
      InMemoryDataService, {dataEncapsulation: false, passThruUnknownUrl: true}), // passThru is for the svgIcons to work
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
    MatSnackBarModule,
    NgxAuthFirebaseUIModule.forRoot(config),
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [...dialogs]
})
export class AppModule {
}
