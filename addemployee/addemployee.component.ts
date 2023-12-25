import { Component, inject } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
import { Employee } from '../employee';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent {

 emp! :Employee[];

  
 userservce :EmployeesService = inject(EmployeesService);
  

  userform! : FormGroup;

  
  
  constructor(private formBuilder: FormBuilder) {
    
    this.userform =  this.formBuilder.group({
      name:['' ],
      age :[''],
      email:[''],
      add:[''],
      password:[''],

    })

    this.emp =  this.userservce.getallemp();

  }

  adduser(){

  const emp :Employee = this.userform.value;
  this.userservce.createuser(emp);
  console.log(emp);

  }

submit(){




  }
}
