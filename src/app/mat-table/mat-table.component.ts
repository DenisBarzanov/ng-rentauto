import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort} from '@angular/material';
import {MatTableDataSource} from './mat-table-datasource';
import {Car} from '../car';
import {CarService} from '../car.service';

@Component({
  selector: 'app-mat-table',
  templateUrl: './mat-table.component.html',
  styleUrls: ['./mat-table.component.css']
})
export class MatTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource;

  cars: Car[];
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  constructor(private carService: CarService) {
  }

  ngOnInit() {
    this.carService.getCars().subscribe(cars => {
      // console.log(cars);
      this.cars = cars;
      this.dataSource = new MatTableDataSource(this.paginator, this.sort, this.cars);
    });
    // for (let i = 0; i < 1000000000; i++) {
    // }
  }
}
