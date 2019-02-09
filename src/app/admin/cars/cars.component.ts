import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogRef, MatPaginator, MatSnackBar, MatSort} from '@angular/material';
import {CarsTableDataSource} from './cars-table-datasource';
import {CarService} from '../../car.service';
import {Car} from '../../models/car';
import {DeleteAreYouSureDialogComponent} from './dialogs/delete-are-you-sure-dialog/delete-are-you-sure-dialog.component';
import {EditDialogComponent} from './dialogs/edit-dialog/edit-dialog.component';


@Component({
  selector: 'app-cars',
  templateUrl: 'cars.component.html',
  styleUrls: ['cars.component.css']
})
export class CarsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: CarsTableDataSource;

  deleteDialogRef: MatDialogRef<DeleteAreYouSureDialogComponent>;
  editDialogRef: MatDialogRef<EditDialogComponent>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['img_url', 'id', 'name', 'pricePerDay', 'transmission', 'options'];

  constructor(private carService: CarService, public dialog: MatDialog, public snackBar: MatSnackBar) {
  }

  async dialogConfirmDeleteOf(car: Car): Promise<boolean> {
    this.deleteDialogRef = this.dialog.open(DeleteAreYouSureDialogComponent, {
      disableClose: false,
      width: '40%',
    });
    this.deleteDialogRef.componentInstance.car = car;

    return this.deleteDialogRef.afterClosed().toPromise();
  }

  async dialogEditCar(car: Car): Promise<Car> {
    this.editDialogRef = this.dialog.open(EditDialogComponent, {
      disableClose: false,
      width: '60%',
    });
    this.editDialogRef.componentInstance.car = car;

    return this.editDialogRef.afterClosed().toPromise();
  }

  async ngOnInit() {
    const cars = await this.carService.getCars().toPromise();
    this.dataSource = new CarsTableDataSource(this.paginator, this.sort, cars);
  }

  async delete(car: Car) {
    let deleted = false;
    const time = 4 * 1000;
    let currentTime;
    let timeout;
    if (await this.dialogConfirmDeleteOf(car)) {
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
        this.dataSource.addCar(car);
      });
    }
  }

  async edit(car: Car) {
    const editedCar = await this.dialogEditCar({...car}); // spread syntax to get a different reference
    if (editedCar) {
      this.dataSource.updateCar(editedCar);
      this.carService.updateCar(editedCar).subscribe();
    }
  }

  async createCar() {
    const createdCar = await this.dialogEditCar(new Car());
    if (createdCar) {
      this.carService.addCar(createdCar).subscribe(savedCar => {
        this.dataSource.addCar(savedCar);
      });
    }
  }
}

