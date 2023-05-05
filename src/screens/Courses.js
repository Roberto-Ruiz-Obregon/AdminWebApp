import React, { useState, useEffect, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import CourseCard from '../components/CourseCard';
import { getCourses } from '../client/course';
import { getTopics } from '../client/topics';
import { Video, Users, Calendar } from 'react-feather';
import Button from '../components/Button';
import Select from '../components/Select';
import Pagination from '../components/Pagination';
import Input from '../components/Input';
import '../styles/verCursos.css';

function Courses() {
    const navigate = useNavigate();
    const [courses, setCourses] = useState([]);
    const [getTopicsObjects, setTopicsObjects] = useState([]);
    const [getTopicsNames, setTopicsNames] = useState([]);
    const [getCurrentTopic, setCurrentTopic] = useState('');
    const [getCurrentTopicName, setCurrentTopicName] = useState('');
    const [getPage, setPage] = useState(1);
    const [getName, setName] = useState('');
    const [getLength, setLength] = useState('');
    const [getPostalCode, setPostalCode] = useState('');
    const [getStatus, setStatus] = useState('');
    const [getModality, setModality] = useState('');

    useEffect(() => {
        getCourses().then((data) => {
            setCourses(data);
            setLength(data.length);
        });
        getTopics().then((data) => {
            setTopicsObjects(data);
            setTopicsNames(data.map((topic) => topic.topic));
        });
    }, []);

    useEffect(() => {
        getCourses(
            getName,
            getPage,
            8,
            getCurrentTopic,
            getPostalCode,
            getStatus,
            getModality
        ).then((data) => {
            setCourses(data);
            setLength(data.length);
        });
    }, [getPage, getPostalCode, getName, getStatus, getModality, getCurrentTopic]);

    useEffect(() => {
        let hasFoundMatch = false;
        getTopicsObjects.forEach((topic) => {
            if (topic.topic === getCurrentTopicName) {
                setCurrentTopic(topic._id);
                hasFoundMatch = true;
            }
        });
        if (!hasFoundMatch) setCurrentTopic('');
    }, [getCurrentTopicName, getTopicsObjects]);

    return (
        <Fragment>
            <div className='header-container'>
                <h4>Inicio / Cursos</h4>
                <Button
                    action={() => navigate('/agregarCursos')}
                    text='Agregar nuevo curso'
                    type='create'
                />
            </div>
            <div className='search-container'>
                <div className='input-container'>
                    <Input
                        label='Nombre del curso a buscar:'
                        placeholder='Buscar'
                        getVal={getName}
                        setVal={setName}
                        type='text'
                    />
                </div>
                <div className='input-container'>
                    <Input
                        label='Código postal de curso:'
                        placeholder='12345'
                        getVal={getPostalCode}
                        setVal={setPostalCode}
                        type='number'
                    />
                </div>
            </div>

            <div className='search-container2'>
                <div className='input-container2'>
                    <Select
                        className='input-general2'
                        label='Selecciona un interés'
                        getVal={getCurrentTopicName}
                        setVal={setCurrentTopicName}
                        options={getTopicsNames}
                    />
                </div>
                <div className='input-container2'>
                    <Select
                        label='Selecciona el tipo de pago'
                        getVal={getStatus}
                        setVal={setStatus}
                        options={['Gratuito', 'Pagado']}
                    />
                </div>
                <div className='input-container2'>
                    <Select
                        label='Selecciona la modalidad del curso'
                        getVal={getModality}
                        setVal={setModality}
                        options={['Remoto', 'Presencial']}
                    />
                </div>
            </div>

            <div id='course-container'>
                {courses.map((course) => (
                    <CourseCard
                        key={course._id}
                        imgSrc={course.imageUrl}
                        title={course.courseName}
                        description={(() => {
                            const desc = course.description.split(' ');
                            if (desc.length < 8) return desc.join(' ');
                            else return desc.splice(0, 8).join(' ') + '...';
                        })()}
                        onClick={() => navigate(`/cursos/${course._id}`)}>
                        <div>
                            {course.modality === 'Remoto' ? <Video /> : <Users />}
                            <p>{course.modality}</p>
                        </div>
                        <div>
                            <Calendar />
                            <p>{new Date(course.startDate).toLocaleDateString()}</p>
                        </div>
                        <div>{course.cost ? <p>$ {course.cost}</p> : <p>Gratis</p>}</div>
                    </CourseCard>
                ))}
            </div>
            <Pagination
                lenght={getLength}
                getPage={getPage}
                setPage={setPage}
                limit={8}
            />
        </Fragment>
    );
}

export default Courses;
