import { Component, OnInit } from '@angular/core';
import { IStudent } from 'src/app/shared/model/student';
import { StudentService } from 'src/app/shared/services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  newStudentArray !: Array<IStudent>
  constructor(
    private _studentService : StudentService
  ) { }

  ngOnInit(): void {
  this.newStudentArray = this._studentService.fetchAllStudent()
  }
  onRemove(std :IStudent){
    this._studentService.onRemoveStd(std)
  }

  onEdit(std :IStudent){
    this._studentService.patchValue(std)
  }

}
