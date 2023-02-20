import React from "react";
import './CourseList.css';
import {CourseListRow} from './CourseListRow';
import {CourseShape} from './CourseShape';
import PropTypes, { arrayOf } from 'prop-types';

function CourseList({listCourses}) {
    return (
        <table id="CourseList">
            <thead>
                <CourseListRow textFirstCell="Available courses" isHeader={true} />
                <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
            </thead>
            <tbody>
                {listCourses === [] && <CourseListRow textFirstCell="No course available" textSecondCell="60" isHeader={false} />}
                {listCourses.map((course) => <CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit} isHeader={true} />)}
            </tbody>
        </table>
    )
}

CourseList.propTypes = {
    listCourses: arrayOf(CourseShape)
}

CourseList.defaultProps = {
    listCourses: []
}

export { CourseList };