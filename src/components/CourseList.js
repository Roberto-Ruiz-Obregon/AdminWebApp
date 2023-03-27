import React, { useState } from 'react';
import '../styles/CourseList.css';
import { 
  DollarSign,
  Video, 
  Users, 
  Calendar
} from 'react-feather';

function CourseList(props) {

  const handleClick = () => {
    console.log('redireccionar');
  };

  // render the CourseCard with its needed props
  return (
    <ul className='course-element'>
      <p><b>{props.courseName}</b><br></br>
      {props.teacher} <br></br>
      {props.startDate} <br></br> <br></br>
            {props.modality === 'Remoto' ?
              <Video />
              : <Users />
            } {'    '}
            <Calendar /> {'    '}
            { props.status === 'De pago' ?
              <DollarSign />
              : ''
            }  {'   '}
            {props.occupation}
            </p>
      </ul>
  );
}

export default CourseList;