import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class DevsizeService {
  tiles(width: number): number {
    if (width > 576 && width <= 768 ) {
      return 50;
    }
    if (width > 786 && width <= 1200 ) {
      return 33;
    }
    return 25;
  }
}