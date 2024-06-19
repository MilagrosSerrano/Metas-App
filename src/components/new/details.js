import { useContext, useEffect, useRef, useState } from 'react';
import { Contexto } from '../../services/memory';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
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

    const { icon, freq, cant, description, completed, goal, deadLine } = form;

    const frequency = ['Seleccione la frecuencia', 'día', 'semana', 'mes', 'año',];
    const emojis = ['Seleccione el ícono','🏃🏽‍♂️','🏃🏽‍♀️','🏊🏼','🏄🏽‍♀️','🚴🏼‍♂️','🧘🏽‍♂️','⚽','🥎','🎮','🎨','🎵','💻','📷','📝','📈','📅','💰','💳','🍽️','🍼','🍻','🧼','🛒','🎉','📚','✈️','🛠️'];



    function onChange(event, prop) {
        setForm(estado => ({ ...estado, [prop]: event.target.value }));
        if (prop === 'description') {
            if (event.target.value.trim().length > 5) {
                descRef.current.style.borderColor = 'green'
            }
            else {
                descRef.current.style.borderColor = 'red'
            }
        }

        if (prop === 'cant') {
            if (event.target.value.trim().length > 0) {
                cantRef.current.style.borderColor = 'green'
            }
            else {
                cantRef.current.style.borderColor = 'red'
            }
        }

        if (prop === 'freq') {
            if ((event.target.value) === 'Seleccione la frecuencia') {
                freqRef.current.style.borderColor = 'red'
            }
            else {
                freqRef.current.style.borderColor = 'green'
            }
        }

        if (prop === 'goal') {
            if ((event.target.value.trim().length > 0) && (event.target.value > 0)) {
                goalRef.current.style.borderColor = 'green'
            }
            else {
                goalRef.current.style.borderColor = 'red'
            }
        }


        if (prop === 'deadLine') {
            const dateExample = RegExp(/^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/);
            if (dateExample.test((event.target.value))) {
                deadLineRef.current.style.borderColor = 'green'
            }
            else {
                deadLineRef.current.style.borderColor = 'red'
            }
        }

        if (prop === 'completed') {
            if ((event.target.value.trim().length > 0) && (event.target.value > 0) && ((event.target.value) < goal)) {
                completedRef.current.style.borderColor = 'green'
            }
            else {
                completedRef.current.style.borderColor = 'red'
            }
        }

        if (prop === 'icon') {
            if ((event.target.value) === 'Seleccione el ícono') {
                iconRef.current.style.borderColor = 'red'
            }
            else {
                iconRef.current.style.borderColor = 'green'
            }
        }


    }

    const [isBlur, setIsBlur] = useState(false);


    function onBlur(e) {
        setIsBlur(true); 
    }

    const [state, dispatch] = useContext(Contexto);


    useEffect(() => {
        const metaMemory = state.objetos[id];
        if (!id) return;
        if (!metaMemory) {
            return (<ErrorPage></ErrorPage>);
        }
        setForm(metaMemory);
    }, [state.objetos, id]);


    const descRef = useRef();
    const cantRef = useRef();
    const freqRef = useRef();
    const goalRef = useRef();
    const deadLineRef = useRef();
    const completedRef = useRef();
    const iconRef = useRef();

    const navigate = useNavigate();


    const create = (e) => {
        e.preventDefault();
        const valid = validInputs();
        if (valid) {
            dispatch({ type: 'create', meta: form });
            navigate('/lista');
        }

    }

    const update = () => {
        dispatch({ type: 'update', meta: form });
        navigate('/lista');
    }

    const cancel = () => {
        navigate('/lista');
    }

    const deleted = (e) => {
        e.preventDefault();
        navigate(`/lista/${id}/deleted`);
    }


    const validInputs = () => {

        let isValid = true;

        if (description.length < 6) {
            descRef.current.focus();
            descRef.current.style.borderColor = 'red';
            isValid = false;
        }

        if (cant === '') {
            cantRef.current.focus();
            cantRef.current.style.borderColor = 'red';
            isValid = false;
        }

        if (freq === '') {
            freqRef.current.focus();
            freqRef.current.style.borderColor = 'red';
            isValid = false;
        }

        if (goal === '') {
            goalRef.current.focus();
            goalRef.current.style.borderColor = 'red';
            isValid = false;
        }

        if (deadLine === '') {
            deadLineRef.current.focus();
            deadLineRef.current.style.borderColor = 'red';
            isValid = false;
        }

        if (completed === '') {
            completedRef.current.focus();
            completedRef.current.style.borderColor = 'red';
            isValid = false;
        }

        if (icon === '') {
            iconRef.current.focus();
            iconRef.current.style.borderColor = 'red';
            isValid = false;
        }


        return isValid;
    }


    return (
        <>
            <form className='form bg-gray-900'>
                <label id='completar' onBlur={e => onBlur(e)}>
                    <div className='flex justify-end'>
                        {isBlur &&
                            ((description.length < 6) ||
                                (cant === '') ||
                                (freq === '') ||
                                (goal === '') ||
                                (deadLine === '') ||
                                (completed === '') ||
                                (icon === '')) &&
                            <p className='inputAlert'>¡Por favor complete todos los campos!</p>}
                    </div>
                </label>

                <label className='label'>
                    <div className='flex items-center'>
                        Describe tu meta
                    </div>
                    <input placeholder='ej. 52 caminatas' ref={descRef} className='input' value={description} onChange={e => onChange(e, 'description')} onBlur={e => onBlur(e)} required minLength={5} />
                </label>
                <label className='label' onBlur={e => onBlur(e)} > ¿Con qué frecuencia deseas cumplir tu meta?
                    <span className='text-gray-500'> (ej. 1 vez a la semana)
                    </span>
                    <div className='flex justify-around'>
                        <input className='input' type='number' ref={cantRef} value={cant} onChange={e => onChange(e, 'cant')} required />
                        <select className='input' ref={freqRef} value={freq} onChange={e => onChange(e, 'freq')} required>
                            {frequency.map((opcion) =>
                            (<option className=' bg-gray-900' key={opcion} value={opcion}>
                                {opcion}
                            </option>))}
                        </select>
                    </div>
                </label>
                <label className='label'>¿Cuántas veces deseas completar esta meta?
                    <input className='input' type='number' ref={goalRef} value={goal} onChange={e => onChange(e, 'goal')} onBlur={e => onBlur(e)} required />
                </label>
                <label className='label'>Ingresa una fecha límite
                    <input className='input h-2' type='date' ref={deadLineRef} value={deadLine} onChange={e => onChange(e, 'deadLine')} onBlur={e => onBlur(e)} required />
                </label>
                <label className='label'>¿Cuántas veces haz completado esta meta?
                    <input className='input' type='number' value={completed} ref={completedRef} onChange={e => onChange(e, 'completed')}  onBlur={e => onBlur(e)} required></input>
                </label>
                <label className='label'> Escoge el ícono para la meta
                    <select className='input' ref={iconRef} value={icon} onChange={e => onChange(e, 'icon')} onBlur={e => onBlur(e)} required>   {emojis.map((emoji) =>
                        (<option value={emoji} key={emoji} required >{emoji}</option>)
                    )}
                    </select>
                </label>
                <div className='flex justify-between mt-9'>                   
                    {(!id) &&
                        <button className='btn btn--red' onClick={cancel}>Cancelar</button>
                    }
                    {(id) &&
                        <button className='btn btn--blue' onClick={cancel}>Cancelar</button>
                    }
                     {(!id) &&
                        <button className='btn btn--blue' onClick={create} >Crear</button>
                    }
                    {(id) &&
                        <button className='btn btn--red' onClick={deleted}>Borrar</button>
                    }
                    {(id) && <button className='btn btn--blue' onClick={update} >Actualizar</button>}

                </div>
            </form>
            <Outlet></Outlet>
        </>
    );
}

export default Details;