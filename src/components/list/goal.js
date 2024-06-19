import { Link, useNavigate } from 'react-router-dom';
import estilos from './goal.module.css';

function Goal({ id, icon, freq, cant, description, completed, goal }) {

    const navigate = useNavigate();

    const completeGoal = (e) =>{
        e.preventDefault();
        navigate(`/lista/${id}/completed`);
        console.log('completar');
    }

    return (
        <Link to={id} className='tarjetaGoal '>
            <div className='flex items-center w-1/2 md:w-full'>
                <div className={estilos.icon}>{icon}</div>
                <p className={estilos.cant}>{cant}<sub>/{freq}</sub></p>
                <p className={estilos.description}>{description}</p>
            </div>
            <div className='flex text-center items-center w-3/5 2xl:w-1/3'>
                <div className='flex flex-col w-full'>
                    <p>{completed} de {goal}</p>
                    <div className={estilos.mainBar}>
                        <div style={{ width: `${Math.round((completed / goal) * 100)}%` }} className={estilos.progressBar}></div>
                    </div>
                </div>
                <div>
                    <button className={estilos.completed} onClick={completeGoal}>Completado</button>
                </div>
            </div>
        </Link>
    );
};

export default Goal;