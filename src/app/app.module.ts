import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { AddPersonComponent } from './component/add-person/add-person.component';
import { ContactComponent } from './component/contact/contact.component';
import { ContactCardComponent } from './component/contact/contact-card/contact-card.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { GlobalAlertComponent } from './component/global/global-alert/global-alert.component';
import { HomeComponent } from './component/home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddPersonComponent,
    ContactComponent,
    ContactCardComponent,
    GlobalAlertComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
