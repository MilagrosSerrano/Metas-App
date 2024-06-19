import estilos from './main.module.css';
import { Outlet} from "react-router-dom";
function Main() {

  return (
    <div className={estilos.container}>
      <main className={estilos.main}>
        <Outlet></Outlet>
      </main>
    </div>
  );
}

export default Main;