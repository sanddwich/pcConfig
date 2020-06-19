import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class DevsizeService {
  tiles(width: number): number {
    if (width > 0 && width <= 576 ) {
      return 1;
    }
    if (width > 576 && width <= 992 ) {
      return 2;
    }
    return 3;
  }
}