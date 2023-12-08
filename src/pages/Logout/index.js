import { Navigate } from 'react-router-dom';
import { DefaultLayout } from '~/components/Layout';

function clearToken() {
  sessionStorage.clear();
  window.localStorage.clear();
}

function Logout() {
  clearToken();

  return <Navigate replace to="/" />;
}

export default Logout;
