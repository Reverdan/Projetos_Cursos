import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";
import { CourseService } from "./course.services";

@Component
({
    templateUrl: './course-info.component.html'
})

export class CourseInfoComponent implements OnInit
{

    course: Course;

    constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService)
    {
        this.course = this.courseService.retrieveById(+String(this.activatedRoute.snapshot.paramMap.get('id')));
    }

    ngOnInit(): void 
    {
        this.course = this.courseService.retrieveById(+String(this.activatedRoute.snapshot.paramMap.get('id')));
    }

    save(): void
    {
        this.courseService.save(this.course);
    }
}

