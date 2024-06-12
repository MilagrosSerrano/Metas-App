import { useContext, useEffect, useRef, useState } from 'react';
import { Contexto } from '../../services/memory';
import { useNavigate, useParams } from 'react-router-dom';
import ErrorPage from '../routes/errorPage';


function Details() {

    const { id } = useParams();

    const [form, setForm] = useState({
        id: '',
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
        if (prop === 'description'){
            if (event.target.value.trim().length > 5){
                descRef.current.style.borderColor = 'green'
            }
            else{
                descRef.current.style.borderColor = 'red'
            }
        }
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


    const descRef = useRef();
    const navigate = useNavigate();

    const create = (e) => {
        e.preventDefault();
        const valid = validInputs();
        if (valid){
            dispatch({ type: 'create', meta: form });
            navigate('/lista'); 
        }

    }

    const update = () =>{
        dispatch({ type: 'update', meta: form });
        navigate('/lista');
    }

    const cancel = () => {
        navigate('/lista');
    }

    const deleted = () =>{
        dispatch({ type: 'deleted', id });
        navigate('/lista');
    }


    const validInputs = () => {
        let isValid = true;

        if (description.length < 6){
            descRef.current.focus();
            descRef.current.style.borderColor = 'red';
            isValid = false;
        } 
        return isValid;
    }



    return (
        <form className='form bg-gray-900'>
            <label id='completar' className='mb-3 hidden'>¡Por favor complete todos los campos!</label>
            <label className='label'> Describe tu meta
                <input placeholder='ej. 52 caminatas' ref={descRef} className='input' value={description} onChange={e => onChange(e, 'description')} required minLength={5}/>
            </label>
            <label className='label'> ¿Con qué frecuencia deseas cumplir tu meta?
                <span className='text-gray-500'> (ej. 1 vez a la semana)
                </span>
                <div className='flex justify-around'>
                    <input className='input' type='number' value={cant} onChange={e => onChange(e, 'cant')} required/>
                    <select className='input' value={freq} onChange={e => onChange(e,'freq')} required>   
                    {frequency.map((opcion) => 
                    (<option className=' bg-gray-900' key={opcion} value={opcion}>
                        {opcion}
                    </option>))}
                    </select>
                </div>
            </label>
            <label className='label'>¿Cuántas veces deseas completar esta meta?
                <input className='input' type='number' value={goal} onChange={e => onChange(e, 'goal')} required/>
            </label>
            <label className='label'>¿Tienes una fecha límite?
                <input className='input' type='date' value={deadLine} onChange={e => onChange(e, 'deadLine')} required/>
            </label>
            <label className='label'>¿Cuántas veces haz completado esta meta?
                <input className='input' value={completed} onChange={e => onChange(e, 'completed')} required></input>
            </label>
            <label className='label'> Escoge el ícono para la meta
                <select className='input' value={icon} onChange={e => onChange(e, 'icon')} required>   {emojis.map((emoji) =>
                      (<option value={emoji} key={emoji}  required >{emoji}</option>)
                    )}
                </select>
            </label>
            <div className='flex justify-between mt-9'>
                {(!id) && 
                <button className='btn btn--blue' onClick={create} >Crear</button>
                }
                {(!id) && 
                <button className='btn btn--red' onClick={cancel}>Cancelar</button>
                }
                {(id) &&
                 <button className='btn btn--blue' onClick={cancel}>Cancelar</button>
                }
                {(id) &&
                 <button className='btn btn--red' onClick={deleted}>Borrar</button>
                }
                {(id) && <button className='btn btn--blue' onClick={update} >Actualizar</button>}
                
            </div>
        </form>
    );
}

export default Details;