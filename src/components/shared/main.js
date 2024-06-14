import Link from './linked';
import checklist from '../../icons/tasklist-gradient-96x96.png';
import add from '../../icons/add-gradient-96x96.png';
import estilos from './main.module.css';
import { Outlet} from "react-router-dom";
import { useContext} from 'react';
import { Contexto } from '../../services/memory';

function Main() {
  
  const [state,dispatch] = useContext(Contexto);
  var listLink = '';
  if (((state.orden).length) === 0) {
    listLink = '/lista/example';
  }
  else {
    listLink = '/lista';
  }

  return (
    <div className={estilos.container}>
      <aside className={estilos.aside}>
        <Link link={listLink} text='Lista de Metas' icon={checklist}></Link>
        <Link link='/nuevaMeta' text='Nueva Meta' icon={add}></Link>
      </aside>
      <main className={estilos.main}>
        <Outlet></Outlet>
      </main>
    </div>
  );
}

export default Main;