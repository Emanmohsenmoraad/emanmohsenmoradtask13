import { Injectable } from '@angular/core';
import { Employee } from './employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  constructor() { }

  // get all user
    getallemp():Employee[]{
  
      return this.emps;
    }
  
    
  // get specific by id user
  getempbyid(id:number):Employee|undefined{
  
      return this.emps.find( emps => emps.id === id );
  }
  
  
  deleteuser(id:number){
  
   const index = this.emps.findIndex((emps => emps.id === id));
   this.emps.splice(index,1);
  
  }
  
  usercount():number{
  
    return this.emps.length;
  }
  
   nextid = 4;
  
  createuser(emps :Employee){
    emps.id = this.nextid++;
    this.emps.push(emps);
  }
  
  updateuser(empid:number , updateduser: Employee ){
  
    const index  =  this.emps.findIndex( emps =>emps.id === empid);
  
    this.emps[index] = {...updateduser , id : empid   }
  
  
  }
  
  
  
  //data
   private emps:Employee[]= [
  
      {
          id:1,
          name:"eman",
          age:"20",
          email:"eman@gmail.com",
          password:"564989654",
          add:"sdfg"
      },
      {
        id:2,
        name:"sameh",
        age:"20",
        email:"sameh@gmail.com",
        password:"1654964",
        add:"sxdcfghjn"
    },
    {
      id:3,
      name:"asia",
      age:"20",
      email:"asia@gmail.com",
      password:"123",
      add:"ahm"
  },
 
    ]
}
