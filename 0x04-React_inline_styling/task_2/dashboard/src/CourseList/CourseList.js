import React from "react";
import './CourseList.css';
import {CourseListRow} from './CourseListRow';
import {CourseShape} from './CourseShape';
import PropTypes, { arrayOf } from 'prop-types';
import { css, StyleSheet } from 'aphrodite';


function CourseList({listCourses}) {
    return (
        <table id="CourseList" className={css(stylesCourseList.table)}>
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

const stylesCourseList = StyleSheet.create({
    table: {
        border: '1px solid',
        width: '90%',
        marginTop: 5,
        borderCollapse: 'collapse'
    }
})

CourseList.propTypes = {
    listCourses: arrayOf(CourseShape)
}

CourseList.defaultProps = {
    listCourses: []
}

export { CourseList };