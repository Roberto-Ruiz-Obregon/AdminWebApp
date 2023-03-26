import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getTopics } from '../client/topics';
import { patchCourse, getCourse } from '../client/course';
import { FireError, FireSucess } from '../utils/alertHandler';
import CourseCard from '../components/CourseCard';
import TopicCard from '../components/TopicCard';
import Input from '../components/Input';
import InputImage from '../components/InputImage';
import Select from '../components/Select';
import Button from '../components/Button';
import '../styles/addCourse.css';

function EditCourse() {
    const { id } = useParams();
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
    const [accessLink, setAccessLink] = useState('https://zoom.us/');
    const [address, setAddress] = useState('');
    const [status, setStatus] = useState('');
    const [cost, setCost] = useState(0);

    // Topics
    // Will store topic object for page renderig
    const [topicsInCourse, setTopicsInCourse] = useState([]);
    const [topicsAvailable, setTopicsAvailable] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const course = await getCourse(id);

                setCourseName(course.courseName);
                setDescription(course.description);
                setStartDate(course.startDate);
                setEndDate(course.endDate);
                setSchedule(course.schedule);
                setTeacher(course.teacher);
                setCapacity(course.capacity);
                setPostalCode(course.postalCode);
                setImage(course.image);
                setModality(course.modality);
                setAccessLink(course.accessLink);
                setAddress(course.address);
                setStatus(course.status);
                setCost(course.cost);

                const topics = await getTopics();
                console.log(course.topics);

                setTopicsInCourse(
                    topics.filter((topic) => course.topics.includes(topic))
                );
                setTopicsAvailable(
                    topics.filter((topic) => !course.topics.includes(topic))
                );
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

        setTopicsInCourse(
            topicsInCourse.filter((currTopic) => currTopic._id !== topic._id)
        );
    };

    /**
     * It adds a topic to the topicsInCourse array and removes it from the topicsAvailable array.
     * @param topic - {_id: "5f0f8f8f8f8f8f8f8f8f8f8f", name: "Topic 1"}
     */
    const handleAddTopic = (topic) => {
        setTopicsInCourse([...topicsInCourse, topic]);

        setTopicsAvailable(
            topicsAvailable.filter((currTopic) => currTopic._id !== topic._id)
        );
    };

    const handleSubmit = async (e) => {
        try {
            const form = new FormData();
            form.append('courseName', courseName);
            form.append('description', description);
            form.append('startDate', startDate);
            form.append('endDate', endDate);
            form.append('schedule', schedule);
            form.append('teacher', teacher);
            form.append('capacity', capacity);
            form.append('postalCode', postalCode);
            form.append('modality', modality);
            form.append('accessLink', accessLink);
            form.append('address', address);
            form.append('status', status);
            form.append('cost', cost);
            topicsInCourse.forEach((topic, i) => {
                form.append(`topics[${i}]`, topic._id);
            });
            form.append('courseImage', image);

            // await postCourse(form);

            FireSucess('Nuevo curso creado con exito.');
        } catch (error) {
            FireError(error.response.data.message);
        }
    };

    return (
        <div className='add-course-container'>
            <h5 className='inicio_agregar'>Inicio / Modificar Curso</h5>
            <h2 className=''>Modificar curso</h2>
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
                    <InputImage
                        label='Imagen de la portada'
                        getVal={image}
                        setVal={setImage}
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
                        {topicsInCourse.map((topic) => (
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
                    <Button action={handleSubmit} text='Modificar curso' type='modify' />
                </div>
            </div>
        </div>
    );
}

export default EditCourse;
