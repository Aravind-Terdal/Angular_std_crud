import { Injectable } from '@angular/core';
import { IStudent } from '../model/student';
import { BehaviorSubject } from 'rxjs';

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

  private student = new BehaviorSubject<any>(null)
  studentData$ = this.student.asObservable()
  constructor() { }
  
  patchValue(std:any){
    this.student.next(std)
  }

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

  updatedStudentObj(std:IStudent){
    let getIndex = this.studentArray.findIndex(f => f.id === std.id);
    this.studentArray[getIndex]=std
  }
}
