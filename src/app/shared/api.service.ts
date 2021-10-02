import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators/'


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) {
   }

  getAllTeachers(){
    return this.http.get<any>("http://localhost:3000/teachers")
    .pipe(map((res:any) => {
      return res;
    }));
  }

  postTeacher(data : any){
    return this.http.post<any>("http://localhost:3000/teachers", data)
    .pipe(map((res:any) => {
      return res;
    }));
  }

  getTeacher(id : number){
    return this.http.get<any>(`http://localhost:3000/teachers/${id}`)
    .pipe(map((res:any) => {
      return res;
    }));
  }

  deleteTeacher(id : number){
    return this.http.delete<any>(`http://localhost:3000/teachers/${id}`)
    .pipe(map((res:any) => {
      return res;
    }));
  }

  updateTeacher(data : any, id : number){
    return this.http.put<any>(`http://localhost:3000/teachers/${id}`, data)
    .pipe(map((res:any) => {
      return res;
    }));
  }

}
