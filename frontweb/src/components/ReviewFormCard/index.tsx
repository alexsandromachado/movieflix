import { AxiosRequestConfig } from 'axios';
import { useForm } from 'react-hook-form';
import { Review } from 'types/reviews';
import { requestBackend } from 'utils/requests';
import './styles.css';

type Props = {
  movieId: string;
  onInsertReview: (review: Review) => void;
};

type FormData = {
  text: string;
  movieId: number;
};

const ReviewFormCard = ({ movieId, onInsertReview }: Props) => {
  const { register, handleSubmit, setValue } = useForm<FormData>();

  const onSubmit = (formData: FormData) => {
    formData.movieId = parseInt(movieId);

    const config: AxiosRequestConfig = {
      method: 'POST',
      url: `/reviews`,
      data: formData,
      withCredentials: true,
    };

    requestBackend(config)
      .then((response) => {
        setValue('text', '');
        onInsertReview(response.data);
      })
      .catch((error) => {
        console.log('ERRO', error);
      });
  };

  return (
    <div className="movie-review-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('text', {
            required: 'Campo obrigatório',
          })}
          type="text"
          className="form-control review-input"
          id="evaluation"
          placeholder="Deixe sua avaliação aqui"
          required
        />
        <button className="btn btn-primary btn-lg review-button">
          Salvar avaliação
        </button>
      </form>
    </div>
  );
};
export default ReviewFormCard;
