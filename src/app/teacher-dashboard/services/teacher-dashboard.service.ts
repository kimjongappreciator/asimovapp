import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators/'


@Injectable({
  providedIn: 'root'
})
export class TeacherDashboardService {

  basePath = "http://localhost:3000/teachers"
  constructor(private http : HttpClient) {
   }

  getAllTeachers(){
    return this.http.get<any>(`${this.basePath}`)
    .pipe(map((res:any) => {
      return res;
    }));
  }

  //create
  postTeacher(data : any){
    return this.http.post<any>(`${this.basePath}`, data)
    .pipe(map((res:any) => {
      return res;
    }));
  }

  getTeacher(id : number){
    return this.http.get<any>(`${this.basePath}/${id}`)
    .pipe(map((res:any) => {
      return res;
    }));
  }

  deleteTeacher(id : number){
    return this.http.delete<any>(`${this.basePath}/${id}`)
    .pipe(map((res:any) => {
      return res;
    }));
  }

  updateTeacher(data : any, id : number){
    return this.http.put<any>(`${this.basePath}/${id}`, data)
    .pipe(map((res:any) => {
      return res;
    }));
  }

}
