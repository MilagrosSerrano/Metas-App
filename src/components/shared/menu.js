import checklist from '../../icons/tasklist-gradient-96x96.png';
import add from '../../icons/add-gradient-96x96.png';
import { useContext } from 'react';
import { Contexto } from '../../services/memory';
import Linked from "./linked";

export default function Menu({isOpen, setIsOpen}) {

  const [state] = useContext(Contexto);

  const closeNav = () => {
    setIsOpen(!isOpen);
  }

  var listLink = '';

  if (((state.orden).length) === 0) {
    listLink = '/lista/example';
  }
  else {
    listLink = '/lista';
  }
  if (isOpen) {
    return (
      <nav className=' w-1/2 h-svh pt-12 p-2 bg-gray-800 rounded-l-lg sm:w-1/3 md:w-1/4' onClick={() => closeNav()}>
        <Linked link={listLink} text={'Lista de Metas'} icon={checklist}></Linked>
        <Linked link='/nuevaMeta' text={'Nueva Meta'} icon={add}></Linked>
      </nav>
    );
  }
};