import React, { useState, useEffect } from 'react';
import { getTopics } from '../client/topics';
import { FireError, FireSucess, FireQuestion } from '../utils/alertHandler';
import CourseCard from '../components/CourseCard';
import TopicCard from '../components/TopicCard';
import Input from '../components/Input';
import Select from '../components/Select';
import Button from '../components/Button';
import '../styles/addCourse.css';

function AddCourse() {
    // Course attributes
    const [courseName, setCourseName] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [schedule, setSchedule] = useState('');
    const [teacher, setTeacher] = useState('');
    const [capacity, setCapacity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [image, setImage] = useState(null);

    const [modality, setModality] = useState('');
    const [accessLink, setAccessLink] = useState('');
    const [address, setAddress] = useState('');
    const [status, setStatus] = useState('');
    const [cost, setCost] = useState(0);

    // Topics
    // Will store topics id - should contain the same as topicsInCourseUI
    const [topicsInCourse, setTopicsInCourse] = useState([]);
    // Will store topic object for page renderig
    const [topicsInCourseUI, setTopicsInCourseUI] = useState([]);
    const [topicsAvailable, setTopicsAvailable] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const topics = await getTopics();

                setTopicsAvailable(topics);
            } catch (error) {
                FireError(error.response.data.message);
            }
        })();
    }, []);

    /**
     * It adds a topic to the topicsInCourse array and removes it from the topicsAvailable array.
     * @param topic - {_id: "5f0f8f8f8f8f8f8f8f8f8f8f", name: "Topic 1"}
     */
    const handleRemoveTopic = (topic) => {
        setTopicsAvailable([...topicsAvailable, topic]);

        setTopicsInCourseUI(
            topicsInCourseUI.filter((currTopic) => currTopic._id !== topic._id)
        );
        setTopicsInCourse(topicsInCourse.filter((currTopic) => currTopic !== topic._id));
    };

    /**
     * It adds a topic to the topicsInCourse array and removes it from the topicsAvailable array.
     * @param topic - {_id: "5f0f8f8f8f8f8f8f8f8f8f8f", name: "Topic 1"}
     */
    const handleAddTopic = (topic) => {
        setTopicsInCourse([...topicsInCourse, topic._id]);
        setTopicsInCourseUI([...topicsInCourseUI, topic]);

        setTopicsAvailable(
            topicsAvailable.filter((currTopic) => currTopic._id !== topic._id)
        );
    };

    return (
        <div className='add-course-container'>
            <h5 className='inicio_agregar'>Inicio / Agregar Cursos</h5>
            <h2 className=''>Agregar Cursos</h2>
            <div className='form-preview-container'>
                <form className='form-container'>
                    <Input
                        label='Titulo del curso'
                        placeholder='Curso de lectura'
                        getVal={courseName}
                        setVal={setCourseName}
                        type='text'
                    />
                    <Input
                        label='Descripcion del curso'
                        placeholder='En este curso...'
                        getVal={description}
                        setVal={setDescription}
                        type='text'
                    />
                    <Input
                        label='Fecha de inicio del curso'
                        placeholder=''
                        getVal={startDate}
                        setVal={setStartDate}
                        type='date'
                    />
                    <Input
                        label='Fecha de fin del curso'
                        placeholder=''
                        getVal={endDate}
                        setVal={setEndDate}
                        type='date'
                    />
                    <Input
                        label='Horario del curso'
                        placeholder='Este curso se imparte a las 6:00pm los sabados'
                        getVal={schedule}
                        setVal={setSchedule}
                        type='text'
                    />
                    <Input
                        label='Maestro del curso'
                        placeholder='Dr. Juan Villeda'
                        getVal={teacher}
                        setVal={setTeacher}
                        type='text'
                    />
                    <Input
                        label='Capacidad del curso'
                        placeholder='20'
                        getVal={capacity}
                        setVal={setCapacity}
                        type='number'
                    />
                    <Input
                        label='Codigo postal del curso'
                        placeholder='76159'
                        getVal={postalCode}
                        setVal={setPostalCode}
                        type='text'
                    />
                    <Input
                        label='Imagen de la portada'
                        placeholder=''
                        getVal={image}
                        setVal={setImage}
                        type='file'
                    />
                    <Select
                        label='Selecciona la modalidad del curso'
                        getVal={modality}
                        setVal={setModality}
                        options={['Remoto', 'Presencial']}
                    />
                    {modality === 'Remoto' ? (
                        <Input
                            label='Link de acceso del curso'
                            placeholder='zoom.com'
                            getVal={accessLink}
                            setVal={setAccessLink}
                            type='text'
                        />
                    ) : (
                        <Input
                            label='Direccion del curso'
                            placeholder='Calle de la Revolucion #130'
                            getVal={address}
                            setVal={setAddress}
                            type='text'
                        />
                    )}
                    <Input
                        label='Imagen de la portada'
                        placeholder=''
                        getVal={image}
                        setVal={setImage}
                        type='file'
                    />
                    <Select
                        label='Selecciona el tipo de pago'
                        getVal={status}
                        setVal={setStatus}
                        options={['Gratuito', 'Pagado']}
                    />
                    {status === 'Pagado' ? (
                        <Input
                            label='Costo'
                            placeholder='150'
                            getVal={cost}
                            setVal={setCost}
                            type='number'
                        />
                    ) : (
                        <></>
                    )}
                    <h3 className=''>Intereses seleccionados para el curso</h3>
                    <div className='topics-container'>
                        {topicsInCourseUI.map((topic) => (
                            <TopicCard
                                interest={topic}
                                action={() => {
                                    handleRemoveTopic(topic);
                                }}
                                actionText='Remover'
                                type='delete'
                            />
                        ))}
                    </div>
                    <h3 className=''>Intereses disponibles</h3>
                    <div className='topics-container'>
                        {topicsAvailable.map((topic) => (
                            <TopicCard
                                interest={topic}
                                action={() => {
                                    handleAddTopic(topic);
                                }}
                                actionText='Agregar'
                                type='create'
                            />
                        ))}
                    </div>
                </form>
                <div className='course-container'>
                    <CourseCard
                        courseName={courseName}
                        description={description}
                        startDate={startDate}
                        occupation={status}
                        modality={modality}
                        imgSrc={image}
                    />
                </div>
            </div>
        </div>
    );
}

export default AddCourse;
