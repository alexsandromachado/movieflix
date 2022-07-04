import { ReactComponent as StarImage } from 'assets/images/star.svg';
import { Link } from 'react-router-dom';
import './styles.css';

const MovieDetails = () => {
  return (
    <div className="movie-details-container">
      <h1>Tela detalhes do filme id: 1</h1>
      <div className="movie-evaluation-form">
        <input
          type="text"
          className="form-control evaluation-input"
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
          <div className="name-container">
            <div className="star-image">
              <StarImage />
            </div>
            <h3>Maria Silva</h3>
          </div>
          <p>
            Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.
          </p>
        </div>
        <div className="movie-evaluation-item">
          <div className="name-container">
            <div className="star-image">
              <StarImage />
            </div>
            <h3>Maria Silva</h3>
          </div>
          <p>
            Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.
          </p>
        </div>
        <div className="movie-evaluation-item">
          <div className="name-container">
            <div className="star-image">
              <StarImage />
            </div>
            <h3>Maria Silva</h3>
          </div>
          <p>
            Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.
          </p>
        </div>
        <div className="movie-evaluation-item">
          <div className="name-container">
            <div className="star-image">
              <StarImage />
            </div>
            <h3>Maria Silva</h3>
          </div>
          <p>
            Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.
          </p>
        </div>
        <div className="movie-evaluation-item">
          <div className="name-container">
            <div className="star-image">
              <StarImage />
            </div>
            <h3>Maria Silva</h3>
          </div>
          <p>
            Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
