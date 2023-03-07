import React from 'react';
import logo from './assets/image 9.png';

function CourseCard(props) {
  return (
    <div className="course-card">
      <h3>{props.courseName}</h3>
      <img src={logo} alt={props.courseName} />
    </div>
  );
}

export default CourseCard;
