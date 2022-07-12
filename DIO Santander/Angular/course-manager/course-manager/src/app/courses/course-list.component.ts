import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course.services";

@Component
({
    // selector: 'app-course-list', // retirado pois alterou para rotas
    templateUrl: "./course-list.component.html"
})

export class CourseListComponent implements OnInit
{
    _courses: Course[] = [];
    _filterBy: string = '';
    filterdedCourses: Course[] = [];

    constructor(private couseService: CourseService)
    {
        
    }

    ngOnInit(): void
    {
        this._courses = this.couseService.retrieveAll();
        this.filterdedCourses = this._courses;
    }

    set filter(value: string)
    {
        this._filterBy = value;
        this.filterdedCourses = this._courses.filter((course: Course) => 
            course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
    }

    get filter()
    {
        return this._filterBy;
    }
}