import './styles.css';

const Catalog = () => {
  return (
    <div className="catalog-container">
      <h1>Tela listagem de filmes</h1>
      <div className="list-container">
        <ul>
          <li>
            <p>Acessar /movies/1</p>
          </li>
          <li>
            <p>Acessar /movies/2</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Catalog;
