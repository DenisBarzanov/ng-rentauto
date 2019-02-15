import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {switchMap} from 'rxjs/operators';
import {User} from '../models/user';
import {AuthProcessService} from 'ngx-auth-firebaseui';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<User>;

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFirestore,
    private router: Router,
    private ngxAuth: AuthProcessService // using the ngx-service
  ) {
    this.ngxAuth.onSuccessEmitter.subscribe(user => {
      console.log('updating user data');
      console.log(user);
      this.updateUserData(user);
    });
    this.user$ = this.ngxAuth.afa.authState.pipe(
      switchMap(user => {
        // Logged in
        if (user) {
          return this.db.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          // Logged out
          return of(null);
        }
      })
    );
  }

  private updateUserData({uid, photoURL, displayName, email, phoneNumber}) {
    // Sets user data in firestore on login
    const userRef: AngularFirestoreDocument<User> = this.db.doc(`users/${uid}`);
    const customUserData = {
      uid: uid,
      photoURL: photoURL,
      displayName: displayName,
      email: email,
      phoneNumber: phoneNumber,
      roles: {
        customer: true // when logging - in this is the default
      }
    };
    return userRef.set(customUserData, {merge: true});
  }
}

