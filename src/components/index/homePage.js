import fire from '../../icons/fire.png';

function HomePage(){
    return(
        <div className='flex flex-col items-center p-10 m-16 text-purple-300'>
            <img src={fire} className=' w-80 pb-12'/>
            <h1 className='text-3xl p-3'>Metas App</h1>
            <h3 className='text-xl'>¡Bienvenido a Nuestra App!</h3>
            <p className='text-md'>Queremos ayudarte a planear y completar tus objetivos.</p>
        </div>
    );
}

export default HomePage;