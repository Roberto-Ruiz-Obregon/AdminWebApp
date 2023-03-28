import React, { Fragment, useState, useEffect } from 'react';
import { getAllCourses } from '../client/courses';
import CourseList from '../components/CourseList';
import "../styles/style.css";

function VerCursos() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await getAllCourses();
            setCourses(result);
        })();
    }, [courses]);

    return (
        <Fragment>
            <h4>Inicio / Ver Cursos</h4>
            <ul className='course-element-container'>
                {courses.map(course => (
                    <CourseList
                        key={course._id}
                        courseName={course.courseName}
                        description={course.description}
                        startDate={new Date(course.startDate).toLocaleDateString()}
                        endDate={new Date(course.endDate).toLocaleDateString()}
                        modality={course.modality}
                        status={course.status}
                    />
                ))}
            </ul>

        </Fragment>
    );
}


export default VerCursos;
