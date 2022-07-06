import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { AddPersonComponent } from './component/add-person/add-person.component';
import { ContactComponent } from './component/contact/contact.component';
import { ContactCardComponent } from './component/contact/contact-card/contact-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddPersonComponent,
    ContactComponent,
    ContactCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
