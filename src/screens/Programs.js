import React, { useState, useEffect, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import CourseCard from '../components/CourseCard';
import { getPrograms } from '../client/programs';
import Button from '../components/Button';
import Pagination from '../components/Pagination';
import Input from '../components/Input';


const Programs = () => {
    const navigate = useNavigate();
    const [programs, setPrograms] = useState([]);
    const [getPage, setPage] = useState(1);
    const [getName, setName] = useState("");
    const [getLength, setLength] = useState("");

    useEffect(() => {
        (async () => {
            try {
                const data = await getPrograms();
                setPrograms(data);
                setLength(data.length)
            }
            catch(error) {
                console.error(error);
            }
        })();
    }, []);

    useEffect(() => {
        getPrograms(getName, getPage, 8)
        .then(data => {
            setPrograms(data)
            setLength(data.length)
        });
    }, [getPage, getName]);

    return (
        <Fragment>
            <div className='header-container'>
                <h4>Inicio / Programas</h4>
                <Button action = {() => navigate('/programs/program/')} text="Agregar nuevo programa" type = "create"/>
            </div>
            <Input
                label='Buscar programa por nombre:'
                placeholder = "Buscar..."
                getVal={getName}
                setVal={setName}
                type='text'
            />
            <div id="course-container">
                { programs.map(program => (
                    <CourseCard 
                        key={program._id}
                        imgSrc={program.imageUrl}
                        title={program.programName}
                        description={program.description}
                        onClick={() => navigate(`/programs/program/${program._id}`)}
                    >
                        <div>
                            <p>{program.category}</p>
                        </div>
                    </CourseCard>
                )) }
            </div>
            <Pagination lenght = {getLength} getPage = {getPage} setPage = {setPage} limit = {8} />
        </Fragment>
    );
};

export default Programs;