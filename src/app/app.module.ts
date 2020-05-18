import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { HomeComponent } from './home/home.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { AddAuthorDetailsComponent } from './add-author-details/add-author-details.component';
import { BusinessDetailsComponent } from './business-details/business-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpdateAuthorDetailsComponent } from './update-author-details/update-author-details.component';
import { HttpClient} from '@angular/common/http' ;
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    HomeComponent,
    ContactDetailsComponent,
    AddAuthorDetailsComponent,
    BusinessDetailsComponent,
    UpdateAuthorDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
