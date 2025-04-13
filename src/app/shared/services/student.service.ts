import { Injectable } from '@angular/core';
import { IStudent } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  studentArray :Array<IStudent> = [
    {
      "name": "John",
      "lastName": "Doe",
      "email": "john.doe@example.com",
      "contact": "+1234567890",
      "id": "S001",
      "flag": true
    },
  ]

  constructor() { }

  fetchAllStudent(){
    return this.studentArray
  }

  newStudentObj(std:IStudent){
    this.studentArray.push(std)
  }

  onRemoveStd(std : IStudent){
    let getIndex = this.studentArray.findIndex(f => f.id === std.id);
    this.studentArray.splice(getIndex, 1)
  }

}
