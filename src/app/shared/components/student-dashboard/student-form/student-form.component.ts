import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IStudent } from 'src/app/shared/model/student';
import { StudentService } from 'src/app/shared/services/student.service';
import { UuidService } from 'src/app/shared/services/uuid.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {

  @ViewChild('StudentForm') StudentForm !: NgForm

  newStudentArray !:Array<IStudent> 

  constructor(
    private _studentService : StudentService,
    private _uuidService : UuidService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.StudentForm.valid){
      let newStudent :IStudent = this.StudentForm.value;
      newStudent.id = this._uuidService.generateUuid()
      this._studentService.newStudentObj(newStudent);
      this.StudentForm.reset()

    }
  }
}
