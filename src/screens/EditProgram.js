import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProgram, postProgram, patchProgram, deleteProgram } from '../client/programs';
import { FireError, FireSucess, FireQuestion } from '../utils/alertHandler';
import Input from '../components/Input';
import InputImage from '../components/InputImage';
import CourseCard from '../components/CourseCard';
import Select from '../components/Select';
import Button from '../components/Button';

const EditProgram = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Program attributes
    const [programName, setProgramName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState('');

    useEffect(() => {
        if (id)
            (async () => {
                try {
                    const program = await getProgram(id);
                    setProgramName(program.programName);
                    setDescription(program.description);
                    setCategory(program.category);
                    setPreview(program.imageUrl);
                }
                catch (error) {
                    FireError(error.response.data.message);
                }
            })();
        else {
            // Asegurarnos que el forms esté vacío
            setProgramName('');
            setDescription('');
            setCategory('');
            setImage(null);
            setPreview('');
        }
    }, [id]);

    useEffect(() => {
        if (!image) {
            setPreview(undefined);
            return;
        }
        const objectUrl = URL.createObjectURL(image);
        setPreview(objectUrl);
        return () => URL.revokeObjectURL(objectUrl);
    }, [image]);

    const handleSubmit = async () => {
        const form = new FormData();
        form.append('programName', programName);
        form.append('description', description);
        form.append('category', category);
        form.append('programImage', image);
        const confirmation = await FireQuestion(
            '¿Está seguro de que desea guardar los cambios?',
            'Todas las modificaciones se aplicarán de inmediato.'
        );
        if (confirmation.isDismissed) return;
        
        try {
            let program = null;
            if (id)
                program = await patchProgram(id, form);
            else
                program = await postProgram(form);
            FireSucess('Programa guardado con éxito.');
            navigate(`/programs/program/${program._id}`);
        }
        catch (error) {
            FireError(error.response.data.message);
        }
    };

    const handleDelete = async () => {
        if (!id)
            return;

        const confirmation = await FireQuestion(
            '¿Está seguro de que desea eliminar este programa?',
            'Esta acción es irreversible.'
        );
        if (confirmation.isDismissed) return;

        try {
            await deleteProgram(id);
            FireSucess('Programa eliminado con exito.');
            navigate('/programs');
        }
        catch (error) {
            FireError(error.response.data.message);
        }
    };

    return (
        <div className='add-course-container'>
            <h5 className='inicio_agregar'>Inicio / Modificar Programa</h5>
            <h2 className=''>Modificar programa</h2>
            <div className='form-preview-container'>
                <form className='form-container'>
                    <Input
                        label='Titulo del programa o beca'
                        placeholder='Beca Benito Juárez...'
                        getVal={programName}
                        setVal={setProgramName}
                        type='text'
                    />
                    <Input
                        label='Descripcion del programa'
                        placeholder='En este programa...'
                        getVal={description}
                        setVal={setDescription}
                        type='text'
                    />
                    <Select className='input-general' 
                        label='Categoría'
                        getVal={category}
                        setVal={setCategory}
                        options={['Beca', 'Programa', 'Evento', 'Apoyo', 'Otro']}
                    />
                    <InputImage
                        label='Elegir nueva imagen de la portada, dejar vacio si no se quiere modificar'
                        getVal={image}
                        setVal={setImage}
                    />
                </form>
                <div className='course-container'>
                    <CourseCard 
                        imgSrc={preview}
                        title={programName}
                        description={description}
                    >
                        <div>
                            <p>{category}</p>
                        </div>
                    </CourseCard>
                    <Button action={handleSubmit} text={`${id ? 'Modificar' : 'Crear'} programa`} type='modify' />
                    { id &&
                        <Button action={handleDelete} text='Eliminar programa' type='delete' />
                    }
                </div>
            </div>
        </div>
    );
};

export default EditProgram;