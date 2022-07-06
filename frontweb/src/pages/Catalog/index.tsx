import { Link } from 'react-router-dom';
import './styles.css';

const Catalog = () => {
  return (
    <div className="catalog-container">
      <h1>Tela listagem de filmes</h1>
      <div className="list-container">
        <ul>
          <li>
            <Link to="/movies/1">
              <p>Acessar /movies/1</p>
            </Link>
          </li>
          <li>
            <Link to="/movies/2">
              <p>Acessar /movies/2</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Catalog;
