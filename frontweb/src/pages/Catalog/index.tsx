import { AxiosRequestConfig } from 'axios';
import MovieCard from 'components/MovieCard';
import Moviefilter from 'components/MovieFilter';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Movie } from 'types/movie';
import { SpringPage } from 'types/vendor/spring';
import { requestBackend } from 'utils/requests';

import './styles.css';

const Catalog = () => {
  const [page, setPage] = useState<SpringPage<Movie>>();

  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: '/movies',
      withCredentials: true,
      headers: { 'Content-Type': 'application/json' },
      params: {
        size: 12,
      },
    };

    requestBackend(params).then((response) => {
      setPage(response.data);
    });
  }, []);

  return (
    <div className="catalog-container">
      <Moviefilter />
      <div className="list-container">
        <div className="row">
          {page?.content.map((movie) => (
            <div className="col-sm-6 col-lg-4 col-xl-3" key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                <MovieCard movie={movie} />
              </Link>
            </div>
          ))}
        </div>
        <Link to="/movies/2">
          <p>Acessar /movies/2</p>
        </Link>
      </div>
    </div>
  );
};

export default Catalog;
