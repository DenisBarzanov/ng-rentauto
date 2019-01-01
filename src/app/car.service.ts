import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Car} from './car';
import {MessageService} from './message.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private carsUrl = 'api/cars';  // URL to web api
  constructor(
    private http: HttpClient,
    private messageService: MessageService) {
  }

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.carsUrl)
      .pipe(
        tap(() => this.log('fetched heroes')),
        catchError(this.handleError('getCars', []))
      );
  }

  getCar(id: number) {
    const url = `${this.carsUrl}/${id}`;
    return this.http.get<Car>(url).pipe(
      tap(() => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Car>(`getHero id=${id}`))
    );
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.message = `CarService: ${message}`;
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  updateCar(car: Car) {
    return this.http.put(this.carsUrl, car, httpOptions).pipe(
      tap(() => this.log(`updated hero id=${car.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  addCar(car: Car): Observable<Car> {
    return this.http.post<Car>(this.carsUrl, car, httpOptions).pipe(
      tap((savedCar: Car) => this.log(`added car w/ id=${savedCar.id}`)),
      catchError(this.handleError<Car>('addCar'))
    );
  }

  /** DELETE: delete the car from the server */
  deleteCar(car: Car | number): Observable<Car> {
    const id = typeof car === 'number' ? car : car.id;
    const url = `${this.carsUrl}/${id}`;

    return this.http.delete<Car>(url, httpOptions).pipe(
      tap(() => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Car>('deleteCar'))
    );
  }
}
