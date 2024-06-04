import Link from './linked';
import checklist from '../../icons/tasklist-gradient-96x96.png';
import add from '../../icons/add-gradient-96x96.png';
import estilos from './main.module.css';
import { Outlet } from "react-router-dom";

function Main() {
    return (
      <div className={estilos.container}> 
        <aside className={estilos.aside}>
          <Link link='/lista' text='Lista de Metas' icon={checklist}></Link>
          <Link link='/nuevaMeta' text='Nueva Meta' icon={add}></Link>
        </aside>
        <main className={estilos.main}>
        <Outlet></Outlet>
        </main>
      </div>
    );
  }
  
  export default Main;