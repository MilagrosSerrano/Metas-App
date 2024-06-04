import Link from './linked';
import logo from '../../icons/fire.png';
import profile from '../../icons/user-96x96.png';
import estilos from './header.module.css';

function Header() {
  return (
    <div className={estilos.header}>
      <Link link='/' text='Metas App' icon={logo}></Link>
      <div>
        <Link link='/profile' icon={profile}></Link>
      </div>
    </div>
  );
}

export default Header;