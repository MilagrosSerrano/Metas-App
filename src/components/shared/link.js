import estilos from './link.module.css'

function Link({icon,link,text}) {
    return(
        <a href={link} className={estilos.vinculo}><img src={icon} alt={text} className={estilos.icons}></img>{text}</a>
    );
}

export default Link