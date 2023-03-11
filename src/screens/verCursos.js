import React, { Fragment } from 'react';
import CourseCard from '../components/CourseCard';
import "../styles/style.scss";
import "../styles/verCursos.scss";
import "../styles/CourseCard.scss";

// class VerCursos extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       cursos: [],
//       isLoaded: true,
//     };
//   }

//   getAllCourses() {
//     fetch(URL)
//       .then((res) => res.json())
//       .then((json) => {
//         this.setState({
//           cursos: json,
//           isLoaded: true,
//         });
//       });
//   }

//   render() {
//     const { isLoaded, cursos } = this.state;
//     if (!isLoaded)
//       return (
//         <div>
//           <h1> Por favor espere... </h1>{" "}
//         </div>
//       );

//     return (
//       <div className="Cursos">
//         <h1> Cursos subidos </h1>{" "}
//         {cursos.map((curso) => (
//           <ol key={curso.id}>
//             _id:         {curso._id},
//             nombreCurso: {curso.nombreCurso}, 
//             ponente:     {curso.ponente}
//             topics:      {curso.topics},
//             teachers:    {curso.teachers},
//             courseName:  {curso.courseName},
//             description: {curso.description} ,
//             modality:    {curso.modality} ,
//             status:      {curso.status} ,
//             startDate:   {curso.startDate},
//             endDate:     {curso.endDate} ,
//             imageUrl:    {curso.imageUrl} ,
//             createdAt:   {curso.createdAt},
//             updatedAt:   {curso.updatedAt}
//           </ol>
//         ))}
//       </div>
//     );
//   }
// }

/*
const request = {
  "topics": [],
  "teachers": [],
  "_id": "6407d32ba457df438c97c6f1",
  "courseName": "Botanica",
  "description": "Aprenderas de la flora de Queretaro y los distintos usos que tienen las plantas.",
  "modality": "Remoto",
  "status": "Gratuito",
  "startDate": "2023-02-28T00:00:00.000Z",
  "endDate": "2023-03-01T00:00:00.000Z",
  "imageUrl": "https://firebasestorage.googleapis.com/v0/b/robertoruiz-eca78.appspot.com/o/cursos-online-botanica_course_1678234410509.jpg?alt=media&token=f8a67854-e925-4f71-aa2c-169a915ded36",
  "createdAt": "2023-03-08T00:13:31.158Z",
  "updatedAt": "2023-03-08T00:13:31.158Z"
}
const cursos = [request,request,request]


function VerCursos() {
  return(
      <div className="saludo-container">
      <div className="inicio-agregar">
        {cursos.map((curso) => (
          <ul key={curso._id}>
            _id: {curso._id},
            topics: {curso.topics},
            teachers: {curso.teachers},
            courseName: {curso.courseName},
            description: {curso.description},
            modality: {curso.modality},
            status: {curso.status},
            startDate: {curso.startDate},
            endDate: {curso.endDate},
            imageUrl: {curso.imageUrl},
            createdAt: {curso.createdAt},
            updatedAt: {curso.updatedAt}
          </ul>
        ))}
      </div>
      </div>
    )

    */

function VerCursos() {
    const courses = [
        {
            _id: 'yanopuedomasMarta',
            courseName: 'Responsabilidad Social Empresarial',
            imgURL:'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80',
            description: 'Sumérgete en el mundo de la imaginación y la creatividad a través de la literatura.',
            startDate: '2023-12-02',
            endDate: '2024-01-03',
            modality: 'Remoto',
            status: 'Gratuito',
        },
        {
            _id: 'pastraminsjas',
            courseName: 'Curso de literatura avanzada',
            imgURL: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1888&q=80',
            description: 'Sumérgete en el mundo de la imaginación y la creatividad a través de la literatura.',
            startDate: '2023-02-02',
            endDate: '2023-02-03',
            modality: 'Remoto',
            status: 'De pago',
        },
        {
            _id: 'hola',
            courseName: 'Curso de escritura',
            imgURL:'https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80',
            description: 'Conoce las herramientas básicas para la escritura de ensayos.',
            startDate: '2023-02-02',
            endDate: '2023-02-03',
            modality: 'Presencial',
            status: 'Gratuito',
        },
        {
            _id: 'hola',
            courseName: 'Curso de escritura',
            imgURL:'https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80',
            description: 'Conoce las herramientas básicas para la escritura de ensayos.',
            startDate: '2023-02-02',
            endDate: '2023-02-03',
            modality: 'Remoto',
            status: 'Gratuito',
        },
        {
            _id: 'pastraminsjas',
            courseName: 'Curso de literatura avanzada',
            imgURL: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1888&q=80',
            description: 'Sumérgete en el mundo de la imaginación y la creatividad a través de la literatura.',
            startDate: '2023-02-02',
            endDate: '2023-02-03',
            modality: 'Presencial',
            status: 'De pago',
        },
        {
            _id: 'yanopuedomasMarta',
            courseName: 'Responsabilidad Social Empresarial',
            imgURL:'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80',
            description: 'Sumérgete en el mundo de la imaginación y la creatividad a través de la literatura.',
            startDate: '2023-12-02',
            endDate: '2024-01-03',
            modality: 'Remoto',
            status: 'Gratuito',
        },
        {
            _id: 'hola',
            courseName: 'Curso de escritura',
            imgURL:'https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80',
            description: 'Conoce las herramientas básicas para la escritura de ensayos.',
            startDate: '2023-02-02',
            endDate: '2023-02-03',
            modality: 'Remoto',
            status: 'Gratuito',
        },
    ];

    return (
        <Fragment>
            <h4>Inicio / Ver Cursos</h4>
            <div id="course-container">
                { courses.map(course => (
                    <CourseCard 
                        key={course._id}
                        imgURL={course.imgURL}
                        courseName={course.courseName}
                        description={course.description}
                        startDate={new Date(course.startDate).toLocaleDateString()}
                        endDate={new Date(course.endDate).toLocaleDateString()}
                        modality={course.modality}
                        status={course.status}
                    />
                )) }
            </div>
        </Fragment>
    );
}

export default VerCursos;
