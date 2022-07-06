import { ReactComponent as StarImage } from 'assets/images/star.svg';
import { Review } from 'types/reviews';

type Props = {
  reviews: Review[];
};

const ReviewListCard = ({ reviews }: Props) => {
  console.log(reviews[0]);

  return (
    <>
     <div className="movie-evaluation-list">
      {reviews.map((review) => (
        <div className="movie-evaluation-item" key={review.id}>
          <div className="name-container">
            <div className="star-image">
              <StarImage />
            </div>
            <h3>{review.user.name}</h3>
          </div>
          <p>{review.text}</p>
        </div>
      ))}
      </div>
    </>
  );
};
export default ReviewListCard;
