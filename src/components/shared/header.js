
import logo from '../../icons/fire.png';
import menu from '../../icons/menu.png';
import closed from '../../icons/cross-mark.png';
import estilos from './header.module.css';
import { useState } from 'react';
import Menu from './menu';
import Linked from './linked';

function Header() {
  
  const [isOpen,setIsOpen] = useState(false);
  
  console.log(isOpen)
  
  let navIcon = '';

  if (isOpen){
    navIcon = closed;
  }
  else{
    navIcon = menu;
  }

  return (
    <div className={estilos.header}>
      <Linked link='/' text='Metas App' icon={logo}></Linked>
      <button className='absolute right-0' onClick={() => setIsOpen(!isOpen)}><Linked link='#' icon={navIcon}></Linked>
      </button>
      <Menu isOpen={isOpen} setIsOpen={setIsOpen}></Menu>
    </div>
  );
}



export default Header;