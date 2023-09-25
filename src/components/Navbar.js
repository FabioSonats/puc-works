import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from "../hooks/useAuthContext";

//styles
import './Navbar.css';

//components
import Searchbar from './Searchbar';

export default function Navbar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  return (
    <div className='navbar'>
      <nav>
        <ul className="navbar-list">
          <li className="navbar-left">
            <Link to='/' className='brand'>
              <h1>chef Samurai</h1>
            </Link>
          </li>
          {user && (
          <li className="navbar-left">
            <Searchbar />
          </li>
          )}
          {user ? (
            <>
              <li className="navbar-right">
                <button className='btn' onClick={logout}>Sair</button>
              </li>
            </>
          ) : (
            <>
              <li className="navbar-right">
                <Link to='/login'>Login</Link>
              </li>
              <li className="navbar-right">
                <Link to='signup'>Cadastrar</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}
