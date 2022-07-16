import './styles.css';
import { Movie } from 'types/movie';

type Props = {
  movie: Movie;
}

const MovieCard = ( { movie } : Props) => {
  return (
    <div className="movie-catalog-card-container">
      <div className="movie-catalog-card-top-container">
        <img src={movie.imgUrl} alt={movie.title} />
      </div>
      <div className="card-botton-container">
      <div className="movie-catalog-card-description">
        <h4>{movie?.title}</h4>
        <h3 className="text-primary">{movie?.year}</h3>
        <p>{movie?.subTitle ? movie?.subTitle : <br/>}</p>
      </div>
      </div>
    </div>
  );
};

export default MovieCard;
