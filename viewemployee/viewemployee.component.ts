import { Component,inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { EmployeesService } from '../employees.service';
@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrls: ['./viewemployee.component.css']
})
export class ViewemployeeComponent {
  userserve = inject(EmployeesService)
  route: ActivatedRoute = inject(ActivatedRoute);
  user :Employee |undefined;

  constructor() {
    const userid = Number(this.route.snapshot.params['id']);
    this.user = this.userserve.getempbyid(userid);
  }
}
