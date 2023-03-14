import React, { useState } from 'react';
import '../styles/CourseCard.css';
import { 
  DollarSign,
  Video, 
  Users, 
  Calendar
} from 'react-feather';

function CourseCard(props) {
  const [imgSrc] = useState(props.imgSrc);

  const handleClick = () => {
    console.log('redireccionar');
  };

  // render the CourseCard with its needed props
  return (
    <div className="course-card">
      <h3>{props.courseName}</h3>
      <img src={imgSrc} alt={props.courseName} />
     
      <p>{props.description}</p>
          <div>
            { props.modality === 'Remoto' ?
              <Video />
              : <Users />
            }
            <p>{props.modality}</p>
            </div>
            <div>
            <Calendar />
            <p>{props.startDate}</p>
          </div>
          <div>
            <DollarSign />
            <p>{props.occupation}</p>
          </div>
      </div>
  );
}

export default CourseCard;
