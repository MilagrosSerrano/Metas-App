import Goal from "../list/goal";

function Tutorial() {
    return (
        <div className="p-8 mt-2">
            <div className="description m-8 p-4 text-purple-100 w-2/3 mx-auto">
                <h2 className="text-center text-3xl mb-4">Crea la meta que mejor se adapte a tus necesidades.</h2>
                <p className="text-center text-md">Lleva un control de todas tus tareas, una manera más simple de organizar tu vida.</p>
            </div>
            <div className="border-blue-500 border-2 p-2 m-16 rounded-2xl">


                <h1 className="text-2xl p-2 m-2 text-purple-200">3 Metas</h1>
                <Goal icon='🏃🏽‍♂️' freq='día' cant='1' description='Correr 30 minutos.' completed='30' goal='365'></Goal>
                <Goal icon='📚' freq='mes' cant='2' description='Leer un libro.' completed='0' goal='1'></Goal>
                <Goal icon='✈️' freq='año' cant='1' description='Viajar por el mundo-' completed='1' goal='3'></Goal>
            </div>
        </div>
    );
}

export default Tutorial;