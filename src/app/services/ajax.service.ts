import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseInterface } from '../models/course-interface';

@Injectable({
  providedIn: 'root'
})
export class AjaxService {

  private url:string = "https://webbutveckling.miun.se/files/ramschema_ht23.json";
  
    constructor(private http: HttpClient) { }

    getCourses(): Observable<CourseInterface[]> {
      //http anropet med get
      return this.http.get<CourseInterface[]>(this.url);
    }
}
