import Goal from "../list/goal";
import estilos from './tutorial.module.css';

function Tutorial() {
    return (
        <div className={estilos.container}>
            <div className="description p-2 m-2 text-purple-100 md:w-full mx-auto">
                <h2 className="text-center text-3xl mb-4">Crea la meta que mejor se adapte a tus necesidades.</h2>
                <p className="text-center text-md">Lleva un control de todas tus tareas, una manera más simple de organizar tu vida.</p>
            </div>
            <div className={estilos.goals}>
                <h1 className="text-2xl p-2 m-2 w-full text-purple-200">3 Metas</h1>
                <Goal icon='🏃🏽‍♂️' freq='día' cant='1' description='Correr 30 minutos.' completed='30' goal='365'></Goal>
                <Goal icon='📚' freq='mes' cant='2' description='Leer un libro.' completed='0' goal='1'></Goal>
                <Goal icon='✈️' freq='año' cant='1' description='Viajar por el mundo.' completed='1' goal='3'></Goal>
            </div>
        </div>
    );
}

export default Tutorial;