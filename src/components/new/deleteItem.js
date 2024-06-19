import { useContext} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Contexto } from "../../services/memory";

function DeleteItem({title}) {
    const [state, dispatch] = useContext(Contexto);
    const { id } = useParams();
    const navigate = useNavigate();

    const volver = () =>{
        navigate(url);    
    }

    const deleteMeta = () =>{
        if ((state.orden).length === 1){
            navigate('/lista/example');
        }    
        else{
            navigate('/lista');
        }
        dispatch({ type: 'deleted', id });
    }

    let functionTitle = '';
    let btn1 = '';
    let btn2 = '';
    let btnContent = '';
    let url = ''; 

    if (title === 'delete'){
        functionTitle = '¿Deseas eliminar esta meta?';
        btn1 = 'btn btn--blue m-2';
        btn2 = 'btn btn--red m-2';
        btnContent = 'Borrar Meta';
        url = `/lista/${id}`;
    }
    else{
        functionTitle = '¿Deseas completar esta meta?';
        btn1 = 'btn btn--red m-2';
        btn2 = 'btn btn--blue m-2';
        btnContent = 'Completar Meta';
        url = '/lista';
    }

    return (
        <div className="flex items-center fixed inset-0 bg-gray-700 bg-opacity-25 text-center text-white">
            <div className='border-blue-500 border-2 rounded-xl bg-gray-900 mx-auto md:w-1/4 p-4'>
                <h1>{functionTitle}</h1>
                <div className="buttons flex p-2 justify-center ">
                    <button className={btn1} onClick={volver} > Volver </button>
                    <button className={btn2} onClick={deleteMeta} >{btnContent}</button>
                   
                </div>
            </div>
        </div>
    );
}

export default DeleteItem;