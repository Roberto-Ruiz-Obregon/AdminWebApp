import React, { Component } from 'react';
import './style.css';
import logo from './assets/image 9.png';
import CourseCard from './CourseCard';

class Cursos extends Component {
  state = {
    newCourse: '',
    courses: []
  };

  handleInputChange = (event) => {
    this.setState({ newCourse: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const courses = [...this.state.courses];
    courses.push(this.state.newCourse);
    this.setState({ courses, newCourse: '' });
  };

  render() {
    return (
      <div>
        <h2 id="cursos">Aquí puedes agregar cursos</h2>
        <img src={logo} alt="Logo fundación" className="logo-der" />

        <form onSubmit={this.handleSubmit} id="form">
          <label htmlFor="newCourse" id="newCourse_">
            Nuevo curso:
          </label>
          <input type="text" id="newCourse" value={this.state.newCourse} onChange={this.handleInputChange} />
          <button type="submit" id="agregar">
            Agregar Curso
          </button>
        </form>
        {this.state.courses.map((course, index) => (
            <CourseCard key={index} courseName={course} />
          ))}
      </div>
    );
  }
}

export default Cursos;


