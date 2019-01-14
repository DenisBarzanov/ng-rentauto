import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogRef, MatPaginator, MatSnackBar, MatSort} from '@angular/material';
import {CarsTableDataSource} from './cars-table-datasource';
import {CarService} from '../car.service';
import {Car} from '../car';
import {DeleteAreYouSureDialogComponent} from './delete-are-you-sure-dialog/delete-are-you-sure-dialog.component';


@Component({
  selector: 'app-cars',
  templateUrl: 'cars.component.html',
  styleUrls: ['cars.component.css']
})
export class CarsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: CarsTableDataSource;

  dialogRef: MatDialogRef<DeleteAreYouSureDialogComponent>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['img_url', 'id', 'name', 'pricePerDay', 'transmission', 'delete'];

  constructor(private carService: CarService, public dialog: MatDialog, public snackBar: MatSnackBar) {
  }

  async confirmDeleteOf(car: Car): Promise<Boolean> {
    this.dialogRef = this.dialog.open(DeleteAreYouSureDialogComponent, {
      disableClose: false,
      width: '40%',
    });
    this.dialogRef.componentInstance.car = car;

    return this.dialogRef.afterClosed().toPromise();
  }

  async ngOnInit() {
    const cars = await this.carService.getCars().toPromise();
    this.dataSource = new CarsTableDataSource(this.paginator, this.sort, cars);
  }

  add(car: Car | string) { // todo
    this.dataSource.add(car as Car);
    this.carService.addCar(car as Car).subscribe();
  }

  async delete(car: Car) {
    let deleted = false;
    const time = 4 * 1000;
    let currentTime;
    let timeout;
    if (await this.confirmDeleteOf(car)) {
      this.dataSource.delete(car); // first delete it in the view
      currentTime = Date.now();
      timeout = setTimeout(() => {
        deleted = true;
        this.carService.deleteCar(car).subscribe(); // then delete it in the db
      }, time);
      const snackBarRef = this.snackBar.open(`Deleted car with name: ${car.name}`, 'Undo', {
        duration: time - (Date.now() - currentTime) // account for the time that has already passed
      }); // then show the snackbar at the bottom


      snackBarRef.onAction().subscribe(() => {
        if (!deleted) {
          clearTimeout(timeout);
        }
        this.dataSource.add(car);
      });
    }
  }
}

