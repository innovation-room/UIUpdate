import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { AddAuthorDetailsComponent } from './add-author-details/add-author-details.component';
import { BusinessDetailsComponent } from './business-details/business-details.component'
import { UpdateAuthorDetailsComponent } from './update-author-details/update-author-details.component'

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
 },
 {
  path: 'contactDetails',
  component: ContactDetailsComponent
 },
 {
  path: 'addAuthorDetails',
  component: AddAuthorDetailsComponent
 },
 {
  path: 'BusinessDetails',
  component: BusinessDetailsComponent
 },
 {
  path: 'updateAuthorDetails',
  component: UpdateAuthorDetailsComponent
 }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
