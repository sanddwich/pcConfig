import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DevsizeService } from './services/app-devsize.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  
  constructor() {}

  ngOnInit() {
    
  }
}
