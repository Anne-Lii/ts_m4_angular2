import { Component } from '@angular/core';
import { CourseInterface } from '../models/course-interface';
import { AjaxService } from '../services/ajax.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  courselist: CourseInterface[] = [];

  constructor(private ajaxservice: AjaxService) { }

  ngOnInit() {
    this.ajaxservice.getCourses().subscribe(data => {
      this.courselist = data;
    })
  }
}
