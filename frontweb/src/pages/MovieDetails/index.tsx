import { AxiosRequestConfig } from 'axios';
import ReviewFormCard from 'components/ReviewFormCard';
import ReviewListCard from 'components/ReviewListCard';
import ReviewMovieCard from 'components/ReviewMovieCard';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Movie } from 'types/movie';
import { Review } from 'types/reviews';
import { hasAnyRoles } from 'utils/auths';
import { requestBackend } from 'utils/requests';

import './styles.css';

type UrlParams = {
  movieId: string;
};

const MovieDetails = () => {
  const { movieId } = useParams<UrlParams>();

  const [reviews, setReviews] = useState<Review[]>([]);

  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: `/movies/${movieId}/reviews`,
      withCredentials: true,
    };

    requestBackend(config).then((response) => {
      setReviews(response.data);
    });
  }, [movieId]);

  useEffect(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: `/movies/${movieId}`,
      withCredentials: true,
    };

    requestBackend(config).then((response) => {
      setMovie(response.data);
    });
  }, [movieId]);

  const handleInsertReview = (review: Review) => {
    const clone = [...reviews];
    clone.push(review);
    setReviews(clone);
  };

  return (
    <div className="movie-details-container">
      <ReviewMovieCard movie={movie} />
      {hasAnyRoles(['ROLE_MEMBER']) && (
        <ReviewFormCard movieId={movieId} onInsertReview={handleInsertReview} />
      )}
      {reviews && <ReviewListCard reviews={reviews} />}
    </div>
  );
};

export default MovieDetails;
