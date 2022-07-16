import { Movie } from 'types/movie';

import './styles.css';

type Props = {
  movie?: Movie;
};

const ReviewMovieCard = ({ movie }: Props) => {
  return (
    <div className="review-card-container">
      <div className="review-movie-image col-sm-12 col-md-12 col-lg-12 col-xl-6">
        <img src={movie?.imgUrl} alt={movie?.title} />
      </div>
      <div className="review-card-description-container col-sm-12 col-md-12 col-lg-12 col-xl-6">
        <div className="review-movie-description">
          <h4>{movie?.title}</h4>
          <h3 className="text-primary">{movie?.year}</h3>
          <p>{movie?.subTitle}</p>
        </div>
        <div className="review-movie-synopsis">
          <p>{movie?.synopsis}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewMovieCard;
