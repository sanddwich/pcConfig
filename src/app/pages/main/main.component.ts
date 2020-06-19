import { Component, OnInit } from '@angular/core';
import { DevsizeService } from 'src/app/services/app-devsize.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  title: string = 'Главная страница';
  windowSize = document.documentElement.clientWidth;
  blockPercent: number;

  constructor(private devsizeService: DevsizeService) { }

  ngOnInit(): void {
    this.blockPercent = this.devsizeService.tiles(this.windowSize);
    console.log(this.blockPercent);
  }

}
