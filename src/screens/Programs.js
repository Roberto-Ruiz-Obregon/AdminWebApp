import React, { useState, useEffect, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import CourseCard from '../components/CourseCard';
import { getPrograms } from '../client/programs';
import Button from '../components/Button';
import Select from '../components/Select';
import Pagination from '../components/Pagination';
import Input from '../components/Input';
import '../styles/verCursos.css';

const Programs = () => {
    const navigate = useNavigate();
    const [programs, setPrograms] = useState([]);
    const [getPage, setPage] = useState(1);
    const [getName, setName] = useState('');
    const [getLength, setLength] = useState('');
    const [getCategory, setCategory] = useState('');

    useEffect(() => {
        (async () => {
            try {
                const data = await getPrograms();
                setPrograms(data);
                setLength(data.length);
            } catch (error) {
                console.error(error);
            }
        })();
    }, []);

    useEffect(() => {
        getPrograms(getName, getPage, 8, getCategory).then((data) => {
            setPrograms(data);
            setLength(data.length);
        });
    }, [getPage, getName, getCategory]);

    return (
        <Fragment>
            <div className='header-container'>
                <h4>Inicio / Programas</h4>
                <Button
                    action={() => navigate('/programs/program/')}
                    text='Agregar nuevo programa'
                    type='create'
                />
            </div>
            <div className='search-container'>
                <div className='input-container'>
                    <Input
                        label='Buscar programa por nombre:'
                        placeholder='Buscar'
                        getVal={getName}
                        setVal={setName}
                        type='text'
                    />
                </div>
                <div className='input-container'>
                    <Select
                        className='input-general'
                        label='Categoría'
                        getVal={getCategory}
                        setVal={setCategory}
                        options={['Beca', 'Programa', 'Evento', 'Apoyo', 'Otro']}
                    />
                </div>
            </div>
            <div id='course-container'>
                {programs.map((program) => (
                    <CourseCard
                        key={program._id}
                        imgSrc={program.imageUrl}
                        title={program.programName}
                        description={(() => {
                            const desc = program.description.split(' ');
                            if (desc.length < 8) return desc.join(' ');
                            else return desc.splice(0, 8).join(' ') + '...';
                        })()}
                        onClick={() => navigate(`/programs/program/${program._id}`)}>
                        <div>
                            <p>{program.category}</p>
                        </div>
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
};

export default Programs;
