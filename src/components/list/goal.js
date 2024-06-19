import { Link, useNavigate } from 'react-router-dom';
import estilos from './goal.module.css';
import { useEffect } from 'react';

function Goal({ id, icon, freq, cant, description, completed, goal }) {

    const navigate = useNavigate();

    const completeGoal = (e) =>{
        e.preventDefault();
        navigate(`/lista/${id}/completed`);
        console.log('completar');
    }

    return (
        <Link to={id} className='tarjetaGoal '>
            <div className='flex items-center '>
                <div className={estilos.icon}>{icon}</div>
                <p className='ml-10 mr-10 text-2xl'>{cant}<sub>/{freq}</sub></p>
                <p className='ml-5 text-xl'>{description}</p>
            </div>
            <div className='flex text-center items-center'>
                <div className='flex flex-col'>
                    <p>{completed} de {goal}</p>
                    <div className={estilos.mainBar}>
                        <div style={{ width: `${Math.round((completed / goal) * 100)}%` }} className={estilos.progressBar}></div>
                    </div>
                </div>
                <div>
                    <button className='btn btn--blue ml-6' onClick={completeGoal}>Completado</button>
                </div>
            </div>
        </Link>
    );
};

export default Goal;