import {useState} from 'react';
import style from './details.module.css';


function Details() {

    const [form,setForm] = useState({
    id: '1',
    icon: '🏃🏽‍♂️',
    freq: '',
    cant: 2,
    description: '',
    completed: 20,
    goal: 365,
    deadLine: '2024-12-31',
    });

    const {id,icon,cant,description,completed,goal,deadLine} = form;

    const frequency = ['día', 'semana', 'mes','año',];
    const emojis = ['🍽️','🏃🏽‍♂️','📚','✈️'];

    function onChange(event,prop){
        setForm(estado => ({...estado, [prop]:event.target.value}));
        console.log(form);
    }

    return (
        <form className='form'>
            <label className='label'> Describe tu meta
                <input placeholder='ej. 52 caminatas' className='input' value={description} onChange={e => onChange(e,'description')} />
            </label>
            <label className='label'> ¿Con qué frecuencia deseas cumplir tu meta?
                <span className='text-gray-500'> (ej. 1 vez a la semana)
                </span>
                <div className='flex justify-around'>
                    <input className='input' type='number' value={cant} onChange={e => onChange(e,'cant')}/>
                    <select className='input'>
                        {frequency.map(freq =><option value={freq} key={freq} >{freq}</option>)}
                    </select>
                </div>
            </label>
            <label className='label'>¿Cuántas veces deseas completar esta meta?
                <input className='input' type='number' value={goal} onChange={e => onChange(e,'goal')}/>
            </label>
            <label className='label'>¿Tienes una fecha límite?
                <input className='input' type='date' value={deadLine} onChange={e => onChange(e,'deadLine')}/>
            </label>
            <label className='label'>¿Cuántas veces haz completado esta meta?
                <input className='input' value={completed} onChange={e => onChange(e,'completed')}></input>
            </label>
            <label className='label'> Escoge el ícono para la meta
                <select className='input'>{emojis.map(emoji => <option value={icon} key={emoji} >{emoji}</option>)}</select>
            </label>
            <div className='flex justify-between mt-9'>
                <button className='btn btn--red'>Cancelar</button>
                <button className='btn btn--blue'>Crear</button>
            </div>
        </form>
    );
}

export default Details;