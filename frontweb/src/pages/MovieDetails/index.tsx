import { AxiosRequestConfig } from 'axios';
import ReviewFormCard from 'components/ReviewFormCard';
import ReviewListCard from 'components/ReviewListCard';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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

  useEffect(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: `/movies/${movieId}/reviews`,
      withCredentials: true,
    };

    requestBackend(config).then((response) => {
      setReviews(response.data);
      console.log('response:');
      console.log(response.data);
    });
  }, [movieId]);

  const handleInsertReview = (review: Review) => {
    const clone = [...reviews];
    clone.push(review);
    setReviews(clone);
  };

  return (
    <div className="movie-details-container">
      <h1>Tela detalhes do filme id: {movieId}</h1>

      {hasAnyRoles(['ROLE_MEMBER']) && (
        <ReviewFormCard movieId={movieId} onInsertReview={handleInsertReview} />
      )}
      {reviews && <ReviewListCard reviews={reviews} />}
    </div>
  );
};

export default MovieDetails;
