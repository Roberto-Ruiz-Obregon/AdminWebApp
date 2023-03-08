import React from "react";
import "../styles/style.css";

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
    )
}

export default VerCursos;
