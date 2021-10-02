import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { TeacherModel } from './models/teacher-dash-board.model';

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.css']
})
export class TeacherDashboardComponent implements OnInit {

  formValue !: FormGroup;
  teacherModelObject: TeacherModel = new TeacherModel();
  teacherData !: any;
  showAddButton !: boolean;
  showUpdateButton !: boolean;
  constructor(private formbuilder: FormBuilder, private api : ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      firstname : [''],
      lastname : [''],
      email : [''],
      mobile : [''],
      course : ['']
    })
    this.getAllTeachers();
  }


  clickAddTeacher(){
    this.formValue.reset();
    this.showAddButton = true;
    this.showUpdateButton = false;
  }

  postTeacherDetails(){
    this.teacherModelObject.firstname = this.formValue.value.firstname;
    this.teacherModelObject.lastname = this.formValue.value.lastname;
    this.teacherModelObject.email = this.formValue.value.email;
    this.teacherModelObject.mobile = this.formValue.value.mobile;
    this.teacherModelObject.course = this.formValue.value.course;

    this.api.postTeacher(this.teacherModelObject)
    .subscribe(res=>{
      console.log(res);
      alert("Teacher Added Sucessfully!")
      let ref = document.getElementById('cancel');
      ref?.click();
      this.formValue.reset();
      this.getAllTeachers();
    },
    err=>{
      alert("Something went wrong pal")
    })
  }

  getAllTeachers(){
    this.api.getAllTeachers()
    .subscribe(res=>{
      this.teacherData = res;
    })
  }

  deleteTeacher(row : any){
    this.api.deleteTeacher(row.id)
    .subscribe(res =>{
      alert("Teacher Deleted");
      this.getAllTeachers();
    }
    )
  }

  onEdit(row : any){
    this.showAddButton = false;
    this.showUpdateButton = true;
    this.teacherModelObject.id = row.id;
    this.formValue.controls['firstname'].setValue(row.firstname);
    this.formValue.controls['lastname'].setValue(row.lastname);
    this.formValue.controls['email'].setValue(row.email);
    this.formValue.controls['mobile'].setValue(row.mobile);
    this.formValue.controls['course'].setValue(row.course);
  }
  updateTeacherDetails(){
    this.teacherModelObject.firstname = this.formValue.value.firstname;
    this.teacherModelObject.lastname = this.formValue.value.lastname;
    this.teacherModelObject.email = this.formValue.value.email;
    this.teacherModelObject.mobile = this.formValue.value.mobile;
    this.teacherModelObject.course = this.formValue.value.course;
    this.api.updateTeacher(this.teacherModelObject, this.teacherModelObject.id)
    .subscribe(res =>{
      alert("Updated Teacher")
      let ref = document.getElementById('cancel');
      ref?.click();
      this.formValue.reset();
      this.getAllTeachers();
    })
  }
}
