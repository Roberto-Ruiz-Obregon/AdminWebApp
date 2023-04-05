import React, { useState, useEffect, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import CourseCard from '../components/CourseCard';
import { getCourses } from '../client/course';
import { Video, Users, Calendar } from 'react-feather';
import '../styles/verCursos.css';

function Courses() {
    const navigate = useNavigate();
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        getCourses()
        .then(data => setCourses(data));
    }, []);

    return (
        <Fragment>
            <h4>Inicio / Cursos</h4>
            <div id="course-container">
                { courses.map(course => (
                    <CourseCard 
                        key={course._id}
                        imgSrc={course.imageUrl}
                        title={course.courseName}
                        description={course.description}
                        onClick={() => navigate(`/cursos/${course._id}`)}
                    >
                        <div>
                            {course.modality === 'Remoto' ? <Video /> : <Users />}
                            <p>{course.modality}</p>
                        </div>
                        <div>
                            <Calendar />
                            <p>{new Date(course.startDate).toLocaleDateString()}</p>
                        </div>
                        <div>
                            {course.cost
                            ? <p>$ {course.cost}</p>
                            : <p>Gratis</p>
                            }
                        </div>    
                    </CourseCard>
                )) }
            </div>
        </Fragment>
    );
}

export default Courses;