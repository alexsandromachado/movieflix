import { Link } from 'react-router-dom';

type Props = {
  movieId: string;
};

const ReviewFormCard = ({ movieId }: Props) => {
  return (
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
  );
};
export default ReviewFormCard;
