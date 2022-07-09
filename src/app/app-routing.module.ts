import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddPersonComponent } from './component/add-person/add-person.component';
import { ContactComponent } from './component/contact/contact.component';
import { HomeComponent } from './component/home/home.component';
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'add',
    component: AddPersonComponent,
  },
  {
    path: 'contacts',
    component: ContactComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
