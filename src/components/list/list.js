import Goal from './goal';
import { useContext } from 'react';
import { Contexto } from '../../services/memory';


 
function List(){
    const [state,dispatch] = useContext(Contexto);
    console.log(state);
    return(
        state.orden.map(value => <Goal {...state.objetos[value]} key={value}></Goal>)
    )
}

export default List;