import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './modules/shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
 
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { FooterComponent } from './templates/main/footer/footer.component';
import { MainComponent } from './pages/main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScssComponent } from './pages/scss/scss.component';


@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    FooterComponent,
    MainComponent,
    ScssComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    BrowserAnimationsModule,
    FlexLayoutModule,    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
