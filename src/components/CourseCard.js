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

  return (
    <div className="course-card">
      <h3>{props.courseName}</h3>
      <img src={imgSrc} alt={props.courseName} />
     
      <p>{props.description}</p>
      <div className="course-card-properties">
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
      <button className="btn-info" onClick={handleClick} >Ver más</button>
    </div>
  );
}

export default CourseCard;
