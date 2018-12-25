    import {Component, OnInit, ViewChild} from '@angular/core';
    import {Car} from '../car';
    import {CarService} from '../car.service';
    import {MatPaginator, MatSort, MatTable} from '@angular/material';
    import {CarsTableDataSource} from './cars-table-datasource';

    @Component({
      selector: 'app-cars',
      templateUrl: './cars.component.html',
      styleUrls: ['./cars.component.css']
    })
    export class CarsComponent implements OnInit {
      cars: Car[];

      @ViewChild(MatPaginator) paginator: MatPaginator;
      @ViewChild(MatSort) sort: MatSort;
      @ViewChild(MatTable) table: MatTable<Car>;
      dataSource: CarsTableDataSource;

      /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
      displayedColumns = ['id', 'name', 'img_url'];

      constructor(private carService: CarService) {
      }

      async ngOnInit() {
        console.log('before getting cars: ');
        console.log(this.cars);
        this.cars = await this.carService.getCars().toPromise();
        console.log('got cars:');
        console.log(this.cars);
        this.dataSource = new CarsTableDataSource(this.paginator, this.sort, this.cars);
      }

      add(name: string) {
        name = name.trim();
        if (!name) {
          return;
        }
        this.carService.addCar({name} as Car)
          .subscribe(car => {
            this.cars = [...this.cars, car];
            console.log(this.cars);
            console.log('rendering rows');
            this.table.renderRows();
          });
      }

      delete(car: Car) {
        this.cars = this.cars.filter(c => c !== car);
        this.carService.deleteCar(car).subscribe();
        this.table.renderRows();
      }
    }


// console.log('%c onChanges in cars-table', 'color: brown');
// console.log(changes);
