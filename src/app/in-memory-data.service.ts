import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Injectable} from '@angular/core';
import {Car, Transmission} from './models/car';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const cars: Car[] = [
      {
        id: 10,
        name: 'Merceder Carerra',
        img_url: 'http://www.autospies.com/images/users/Agent009/main/caliber-6016.jpg',
        pricePerDay: 5,
        transmission: Transmission.AUTOMATIC
      },
      {
        id: 11,
        name: 'Mr. Nice',
        img_url: 'https://images.summitmedia-digital.com/topgear/images/2017/07/07/tint-main.jpg',
        pricePerDay: 5,
        transmission: Transmission.MANUAL
      },
      {
        id: 12,
        name: 'Narco',
        img_url: 'http://autonews.gasgoo.com/resource/editor/%E5%A5%87%E7%91%9EA3.jpg',
        pricePerDay: 5,
        transmission: Transmission.MANUAL
      },
      {
        id: 13,
        name: 'Bombasto',
        img_url: 'https://blogs.ubc.ca/erickyao/files/2010/11/Honda.jpg',
        pricePerDay: 5,
        transmission: Transmission.MANUAL
      },
      {
        id: 14,
        name: 'Mr. Nice',
        img_url: 'https://images.summitmedia-digital.com/topgear/images/2017/07/07/tint-main.jpg',
        pricePerDay: 5,
        transmission: Transmission.MANUAL
      },
      {
        id: 15,
        name: 'Narco',
        img_url: 'http://autonews.gasgoo.com/resource/editor/%E5%A5%87%E7%91%9EA3.jpg',
        pricePerDay: 5,
        transmission: Transmission.MANUAL
      },
      {
        id: 16,
        name: 'Bombasto',
        img_url: 'https://blogs.ubc.ca/erickyao/files/2010/11/Honda.jpg',
        pricePerDay: 5,
        transmission: Transmission.MANUAL
      },
      {
        id: 17,
        name: 'Mr. Nice',
        img_url: 'https://images.summitmedia-digital.com/topgear/images/2017/07/07/tint-main.jpg',
        pricePerDay: 5,
        transmission: Transmission.MANUAL
      },
      {
        id: 18,
        name: 'Narco',
        img_url: 'http://autonews.gasgoo.com/resource/editor/%E5%A5%87%E7%91%9EA3.jpg',
        pricePerDay: 5,
        transmission: Transmission.MANUAL
      },
      {
        id: 19,
        name: 'Bombasto',
        img_url: 'https://blogs.ubc.ca/erickyao/files/2010/11/Honda.jpg',
        pricePerDay: 5,
        transmission: Transmission.MANUAL
      },
      // {id: 14, name: 'Celeritas'},
      // {id: 15, name: 'Magneta'},
      // {id: 16, name: 'RubberMan'},
      // {id: 17, name: 'Dynama'},
      // {id: 18, name: 'Dr IQ'},
      // {id: 19, name: 'Magma'},
      // {id: 20, name: 'Tornado'}
    ];
    return {cars};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(cars: Car[]): number {
    return cars.length > 0 ? Math.max(...cars.map(hero => hero.id)) + 1 : 10;
  }
}
