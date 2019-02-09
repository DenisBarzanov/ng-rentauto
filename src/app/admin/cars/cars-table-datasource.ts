import {DataSource} from '@angular/cdk/collections';
import {MatPaginator, MatSort} from '@angular/material';
import {map} from 'rxjs/operators';
import {BehaviorSubject, merge, Observable} from 'rxjs';
import {Car} from '../../models/car';

// TODO: Replace this with your own cars model type
type DataTableItem = Car;

/**
 * Data source for the DataTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed cars
 * (including sorting, pagination, and filtering).
 */
export class CarsTableDataSource extends DataSource<DataTableItem> {
  dataStream;

  constructor(private paginator: MatPaginator, private sort: MatSort, cars: Car[]) {
    super();
    this.dataStream = new BehaviorSubject<DataTableItem[]>(cars);
  }

  get cars(): DataTableItem[] {
    return this.dataStream.value;
  }

  set cars(v: DataTableItem[]) {
    this.dataStream.next(v);
  }

  addCar(car: Car) {
    this.cars = [car, ...this.cars];
  }

  updateCar(car: Car) {
    const carIndex = this.cars.findIndex(c => c.id === car.id);
    this.cars[carIndex] = car;
    this.cars = [...this.cars];
  }

  delete(car: Car) {
    this.cars = this.cars.filter(c => c !== car);
  }

  /**
   * Connect this cars source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<DataTableItem[]> {
    // Combine everything that affects the rendered cars into one update
    // stream for the cars-table to consume.
    const dataMutations = [
      this.dataStream,
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginators length
    this.paginator.length = this.cars.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.cars]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {
  }

  /**
   * Paginate the cars (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate cars from the server.
   */
  private getPagedData(data: DataTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the cars (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate cars from the server.
   */
  private getSortedData(data: DataTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name':
          return compare(a.name, b.name, isAsc);
        case 'id':
          return compare(+a.id, +b.id, isAsc);
        default:
          return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

