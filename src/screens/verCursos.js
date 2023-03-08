import React, { Component } from "react";
import "../styles/style.css";

class VerCursos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cursos: [],
      isLoaded: true,
    };
  }

  getAllCourses() {
    fetch(URL)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          cursos: json,
          isLoaded: true,
        });
      });
  }

  render() {
    const { isLoaded, cursos } = this.state;
    if (!isLoaded)
      return (
        <div>
          <h1> Por favor espere... </h1>{" "}
        </div>
      );

    return (
      <div className="Cursos">
        <h1> Cursos subidos </h1>{" "}
        {cursos.map((curso) => (
          <ol key={curso.id}>
            _id:         {curso._id},
            nombreCurso: {curso.nombreCurso}, 
            ponente:     {curso.ponente}
            topics:      {curso.topics},
            teachers:    {curso.teachers},
            courseName:  {curso.courseName},
            description: {curso.description} ,
            modality:    {curso.modality} ,
            status:      {curso.status} ,
            startDate:   {curso.startDate},
            endDate:     {curso.endDate} ,
            imageUrl:    {curso.imageUrl} ,
            createdAt:   {curso.createdAt},
            updatedAt:   {curso.updatedAt}
          </ol>
        ))}
      </div>
    );
  }
}

export default VerCursos;
