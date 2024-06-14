import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Contexto } from "../../services/memory";

function DeleteItem() {
    const [state, dispatch] = useContext(Contexto);
    const { id } = useParams();
    const navigate = useNavigate();

    const volver = () =>{
        navigate(`/lista/${id}`);    
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

   

    return (
        <div className="flex items-center fixed inset-0 bg-gray-700 bg-opacity-25 text-center text-white">
            <div className='border-blue-500 border-2 rounded-xl bg-gray-900 mx-auto w-1/4 p-4'>
                <h1>¿Desea eliminar esta meta?</h1>
                <div className="buttons flex p-2 justify-center ">
                    <button className='btn btn--blue m-2' onClick={volver} > Volver </button>
                    <button className='btn btn--red m-2' onClick={deleteMeta} > Borrar Meta </button>
                   
                </div>
            </div>
        </div>
    );
}

export default DeleteItem;