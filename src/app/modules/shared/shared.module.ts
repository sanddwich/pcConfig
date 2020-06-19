import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';



const materialModules: any[] = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatButtonToggleModule,
  MatSidenavModule,
  MatMenuModule,
  MatListModule,
  MatDividerModule,
  ScrollingModule,
  MatGridListModule,
  MatCardModule
];

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    materialModules,
  ],
  exports: [
    HttpClientModule,
    materialModules,
  ]
})
export class SharedModule { }
