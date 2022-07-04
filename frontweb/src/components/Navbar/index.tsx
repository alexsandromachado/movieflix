import { AuthContext } from 'AuthContext';
import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTokenData, isAuthenticated } from 'utils/auths';
import history from 'utils/history';
import { removeAuthData } from 'utils/storage';

import './styles.css';

const Navbar = () => {
  const { authContextData, setAuthContextData } = useContext(AuthContext);

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthContextData({
        authenticated: true,
        tokenData: getTokenData(),
      });
    } else {
      setAuthContextData({
        authenticated: false,
      });
    }
  }, [setAuthContextData]);

  const handleLogoutClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    removeAuthData();
    setAuthContextData({
      authenticated: false,
    });
    history.replace('/');
  };

  return (
    <nav className="navbar main-nav bg-primary">
      <Link to="/" className="nav-logo-text">
        <h4 className="nav-logo">MovieFlix</h4>
      </Link>
      {authContextData.authenticated ? (
        <>
          <Link to="/" className="nav-logo-text">
            <button
              type="button"
              className="btn btn-primary logout-button"
              onClick={handleLogoutClick}
            >
              SAIR
            </button>
          </Link>
        </>
      ) : (
        ''
      )}
    </nav>
  );
};

export default Navbar;
