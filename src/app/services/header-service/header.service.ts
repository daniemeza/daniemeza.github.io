import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  accessHeader = 'Header service running...';

  constructor() { }
}
