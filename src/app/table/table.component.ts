import { Component} from '@angular/core';
import { CourseInterface } from '../models/course-interface';
import { AjaxService } from '../services/ajax.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

  courselist: CourseInterface[] = [];
  sortBy: string = '';
  reverse: boolean = false;
  searchTerm: string = '';
 

  constructor(private ajaxservice: AjaxService) { }

  ngOnInit() {
    this.ajaxservice.getCourses().subscribe(data => {
      this.courselist = data.map(course => {
        return {
          ...course,
          code: course.code.toUpperCase()//convert coursecode to uppercase
        }
      })
    })
  }

  sort(key: string) {
    this.sortBy = key;
    this.reverse = !this.reverse;
    this.courselist.sort((a, b) => {
      const x = a[key];
      const y = b[key];
      return this.reverse ? y.localeCompare(x) : x.localeCompare(y);
    });
  }


filterCourses(): CourseInterface[] {
  return this.courselist.filter(course =>
    course.code.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
    course.coursename.toLowerCase().includes(this.searchTerm.toLowerCase())
  );
}

}

