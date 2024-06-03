import Link from './link';
import checklist from '../../icons/tasklist-gradient-96x96.png';
import add from '../../icons/add-gradient-96x96.png';
import estilos from './main.module.css';
import List from '../list/list';
import Details from '../new/details';

function Main({children}) {
    return (
      <div className={estilos.container}> 
        <aside className={estilos.aside}>
          <Link link='/lista' text='Lista de Metas' icon={checklist}></Link>
          <Link link='/nuevaMeta' text='Nueva Meta' icon={add}></Link>
        </aside>
        <main className={estilos.main}>
        {/*   <List></List> */}
        <Details></Details>
        </main>
      </div>
    );
  }
  
  export default Main;