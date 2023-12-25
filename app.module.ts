import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmoloyeelistComponent } from './emoloyeelist/emoloyeelist.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';

@NgModule({
  declarations: [
    AppComponent,
     EmoloyeelistComponent,
     AddemployeeComponent,
     ViewemployeeComponent,
     EditemployeeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
