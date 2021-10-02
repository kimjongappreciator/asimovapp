import { Component, OnInit } from '@angular/core';

import {TeacherDashboardService} from "../teacher-dashboard/services/teacher-dashboard.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  teacherData !: any;
  unitData !: any;
  principalData !: any;
  constructor(private api: TeacherDashboardService) { }

  ngOnInit(): void {
    this.getAllUnits();
    this.getPrincipalData()
  }

 // getAllTeachers(){
 //   this.api.getAllTeachers()
 //     .subscribe(res=>{
 //       this.teacherData = res;
 //     })
//  }
  getAllUnits(){
    this.unitData = [
      {"id": "1", "name":"Sample1", "description":"this is a description"},
      {"id": "2", "name":"Sample2", "description":"this is a description"},
      {"id": "3", "name":"Sample3", "description":"this is a description"},
      {"id": "4", "name":"Sample4", "description":"this is a description"},
    ]
  }
  getPrincipalData(){
    this.principalData = 45
  }
}
