import { Link } from 'react-router-dom';
import './styles.css';

const MovieDetails = () => {
  return (
    <div className="movie-details-container">
      <h1>Tela detalhes do filmes</h1>
      <h1>id: 1</h1>
      <div className="movie-evaluation-form">
        <input
          type="text"
          className="form-control login-input"
          id="evaluation"
          placeholder="Deixe sua avaliação aqui"
          required
        />
        <Link to="/catalog">
          <button className="btn btn-primary btn-lg evaluation-button">
            Salvar avaliação
          </button>
        </Link>
      </div>
      <div className="movie-evaluation-list">
        <div className="movie-evaluation-item">
          <h3>Maria Silva</h3>
          <p>
            Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.
          </p>
        </div>
        <div className="movie-evaluation-item">
          <h3>Maria Silva</h3>
          <p>
            Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.
          </p>
        </div>
        <div className="movie-evaluation-item">
          <h3>Maria Silva</h3>
          <p>
            Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.
          </p>
        </div>
        <div className="movie-evaluation-item">
          <h3>Maria Silva</h3>
          <p>
            Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
