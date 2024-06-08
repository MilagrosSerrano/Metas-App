import { useContext, useEffect, useState } from 'react';
import { Contexto } from '../../services/memory';
import { useNavigate, useParams } from 'react-router-dom';
import ErrorPage from '../routes/errorPage';


function Details() {

    const { id } = useParams();

    const [form, setForm] = useState({
        icon: '',
        freq: '',
        cant: '',
        description: '',
        completed: '',
        goal: '',
        deadLine: '',
    });

    const {icon, freq, cant, description, completed, goal, deadLine } = form;

    const frequency = ['Seleccione la frequencia','día', 'semana', 'mes', 'año',];
    const emojis = ['Seleccione el ícono','🍽️', '🏃🏽‍♂️', '📚', '✈️'];

    function onChange(event, prop) {
        setForm(estado => ({ ...estado, [prop]: event.target.value }));
    }

    const [state, dispatch] = useContext(Contexto);

    

    useEffect(() => {
        const metaMemory = state.objetos[id];
        if (!id) return;
        if (!metaMemory){
            return ( <ErrorPage></ErrorPage>);
        }
        setForm(metaMemory);
    },[state.objetos,id]);

    const navigate = useNavigate();

    const create = async () => {
        dispatch({ type: 'create', meta: form });
        navigate('/lista');
    }

    const cancel = () => {
        navigate('/lista');
    }

    return (
        <form className='form bg-gray-900'>
            <label className='label'> Describe tu meta
                <input placeholder='ej. 52 caminatas' className='input' value={description} onChange={e => onChange(e, 'description')} />
            </label>
            <label className='label'> ¿Con qué frecuencia deseas cumplir tu meta?
                <span className='text-gray-500'> (ej. 1 vez a la semana)
                </span>
                <div className='flex justify-around'>
                    <input className='input' type='number' value={cant} onChange={e => onChange(e, 'cant')} />
                    <select className='input' value={freq} onChange={e => onChange(e, 'freq')}>
                        {frequency.map((frequence) => (<option key={frequence} className='bg-gray-900'>{frequence}</option>))}
                    </select>
                </div>
            </label>
            <label className='label'>¿Cuántas veces deseas completar esta meta?
                <input className='input' type='number' value={goal} onChange={e => onChange(e, 'goal')} />
            </label>
            <label className='label'>¿Tienes una fecha límite?
                <input className='input' type='date' value={deadLine} onChange={e => onChange(e, 'deadLine')} />
            </label>
            <label className='label'>¿Cuántas veces haz completado esta meta?
                <input className='input' value={completed} onChange={e => onChange(e, 'completed')}></input>
            </label>
            <label className='label'> Escoge el ícono para la meta
                <select className='input' value={icon} onChange={e => onChange(e, 'icon')}>   {emojis.map((emoji) =>
                      (<option value={emoji} key={emoji} >{emoji}</option>)
                    )}
                </select>
            </label>
            <div className='flex justify-between mt-9'>
                <button className='btn btn--red' onClick={cancel}>Cancelar</button>
                <button className='btn btn--blue' onClick={create} >Crear</button>
            </div>
        </form>
    );
}

export default Details;