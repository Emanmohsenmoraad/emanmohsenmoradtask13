import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Employee } from '../employee';
import { EmployeesService } from '../employees.service';

import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent {  updateuserform! : FormGroup;
  userid!:number;


constructor( private formbuilder:FormBuilder ,private employeesservice :EmployeesService ,private route:ActivatedRoute  ){

  this.updateuserform =  this.formbuilder.group({
    name:['' ],
    age :[''],
    email:[''],
    add:[''],
    password:[''],

  })


}


ngOnInit() {
  this.route.params.subscribe(params => {
    this.userid = +params['id'];
    this.loaduserDetails();
  });
}

loaduserDetails() {
  const useeee = this.employeesservice.getempbyid(this.userid);

  if (useeee) {
    this.updateuserform.patchValue(useeee);
  } else {
    // Redirect to the product list if the product is not found
  
  }
}

updateUser() {
  if (this.updateuserform.valid) {
    const updateduser: Employee = {
      id: this.userid,
      ...this.updateuserform.value
    };

    this.employeesservice.updateuser(this.userid, updateduser);
  
  }
}



}
