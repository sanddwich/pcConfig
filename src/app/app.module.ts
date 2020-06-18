import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './modules/shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HeaderComponent } from './templates/main/header/header.component';
import { HeaderNavigationComponent } from './templates/main/header-navigation/header-navigation.component';
import { FooterComponent } from './templates/main/footer/footer.component';
import { MainComponent } from './pages/main/main.component';
import { HeaderDrawerComponent } from './templates/main/header-drawer/header-drawer.component';


@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HeaderComponent,
    HeaderNavigationComponent,
    FooterComponent,
    MainComponent,
    HeaderDrawerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
