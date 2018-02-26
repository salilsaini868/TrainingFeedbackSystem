import { Observable } from 'rxjs/Rx';

import { CarEntity, DropdownItem } from '../model/index';
import { cars, years } from './cars.mock';

export class CarService {

  fetchCars(): Observable<CarEntity[]> {
    return Observable.of(cars);
  }

  // tslint:disable-next-line:no-any
  fetchCar(id: any): Observable<CarEntity> {
    return Observable.of(cars.find(t => t.id === id) as CarEntity);
  }

  getModelYears(): Observable<DropdownItem[]> {
    return Observable.of(years);
  }
}
