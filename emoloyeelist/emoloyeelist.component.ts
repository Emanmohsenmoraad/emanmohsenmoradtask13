import { Component , inject} from '@angular/core';
import { Employee } from '../employee';
import { EmployeesService } from '../employees.service';
@Component({
  selector: 'app-emoloyeelist',
  templateUrl: './emoloyeelist.component.html',
  styleUrls: ['./emoloyeelist.component.css']
})
export class EmoloyeelistComponent {
  users: Employee[] = [];

 
  userservce :EmployeesService = inject(EmployeesService);
  constructor() {
   
this.users  = this.userservce.getallemp();

  }

  deleteruser(id:number){
this.userservce.deleteuser(id);

  }


}
