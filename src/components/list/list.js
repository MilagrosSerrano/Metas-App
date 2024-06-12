import Goal from './goal';
import { useContext, useEffect } from 'react';
import { Contexto } from '../../services/memory';
import { Outlet, useNavigate } from 'react-router-dom';



function List() {
    const [state, dispatch] = useContext(Contexto);
    const navigate = useNavigate();

    useEffect(() =>{
        if (((state.orden).length) === 0){
            navigate('/lista/example'); 
        }
    },[navigate,state.orden.length])


    return (
        <>
            {state.orden.map(value => 
            <Goal {...state.objetos[value]} key={value}></Goal>)}
            <Outlet></Outlet>
        </>
    )
}

export default List;