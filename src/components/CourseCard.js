import React from 'react';
import '../styles/CourseCard.css';
import { 
  DollarSign,
  Video, 
  Users, 
  Calendar
} from 'react-feather';
import logo from '../assets/image 9.png';

function CourseCard(props) {

  const handleClick = () => {
    console.log('redireccionar')
  };

  return (
    <div className="course-card">
      <h3>{props.courseName}</h3>
      <img src={props.img} alt={props.courseName}  />
      <p>{props.description}</p>
      <div className="course-card-properties">
          <div>
            <DollarSign />
            <p>{props.status}</p>
          </div>
          <div>
            { props.modality == 'Remoto' ?
              <Video />
              : <Users />
            }
            <p>{props.modality}</p>
          </div>
          <div>
            <Calendar />
            <p>{props.startDate}-{props.endDate}</p>
          </div>
      </div>
      <button className="btn-info" onClick={handleClick} >Ver más</button>
    </div>
  );
}

export default CourseCard;
