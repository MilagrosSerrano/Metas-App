import style from './details.module.css';


function Details() {
    const frequency = ['día', 'semana', 'mes','año',];
    const emojis = ['🍽️','🏃🏽‍♂️','📚','✈️'];
    return (
        <form className='form'>
            <label className='label'> Describe tu meta
                <input placeholder='ej. 52 caminatas' className='input' />
            </label>
            <label> ¿Con qué frecuencia deseas cumplir tu meta?
                <span className='text-gray-500'> (ej. 1 vez a la semana)
                </span>
                <div className='flex justify-around'>
                    <input className='input' type='number'/>
                    <select className='input'>
                        {frequency.map(freq =><option value={freq}>{freq}</option>)}
                    </select>
                </div>
            </label>
            <label>¿Cuántas veces deseas completar esta meta?
                <input className='input' type='number'/>
            </label>
            <label>¿Tienes una fecha límite?
                <input className='input' type='date'/>
            </label>
            <label>¿Cuántas veces haz completado esta meta?
                <input className='input'>

                </input>
            </label>
            <label> Escoge el ícono para la meta
                <select className='input'>{emojis.map(emoji => <option value={emoji}>{emoji}</option>)}</select>
            </label>
            <div className='flex justify-between mt-6'>
                <button className='btn btn--red'>Cancelar</button>
                <button className='btn btn--blue'>Crear</button>
            </div>
        </form>
    );
}

export default Details;