import { Injectable } from '@angular/core';
import { BehaviorSubject  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatasharingService {
  public isUserLoggrdIn:BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() { }
}
