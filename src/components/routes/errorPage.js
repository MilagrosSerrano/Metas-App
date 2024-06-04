import { useRouteError } from "react-router-dom";
import style from '../../errorPage.css';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className={style}>
      <h1 className="text-4xl p-6">Oops!</h1>
      <p className="text-lg">Sorry, an unexpected error has occurred.</p>
      <p className="text-md p-4">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}