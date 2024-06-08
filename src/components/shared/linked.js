import { Link } from 'react-router-dom'
import estilos from './link.module.css'

function Linked({icon,link,text}) {
    return(
        
        <Link to={link} className={estilos.vinculo}><img src={icon} alt={text} className={estilos.icons}></img>{text}</Link>
    );
}

export default Linked;