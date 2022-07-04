import { Link } from 'react-router-dom';

import './styles.css';

const Navbar = () => {
  return (
    <nav className="navbar main-nav bg-primary">
      <Link to="/" className="nav-logo-text">
        <h4 className="nav-logo">MovieFlix</h4>
      </Link>
      <Link to="/" className="nav-logo-text">
        <button type="button" className="btn btn-primary logout-button">
          SAIR
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
