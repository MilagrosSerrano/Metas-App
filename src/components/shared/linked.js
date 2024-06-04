import estilos from './link.module.css'

function Linked({icon,link,text}) {
    return(
        <a href={link} className={estilos.vinculo}><img src={icon} alt={text} className={estilos.icons}></img>{text}</a>
    );
}

export default Linked;