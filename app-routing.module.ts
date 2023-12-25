import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmoloyeelistComponent } from './emoloyeelist/emoloyeelist.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';

const routes: Routes = [
  {path:'',component:EmoloyeelistComponent},
  { path: 'add', component: AddemployeeComponent },
  { path: 'view/:id', component: ViewemployeeComponent },
  { path: 'edit/:id', component: EditemployeeComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
