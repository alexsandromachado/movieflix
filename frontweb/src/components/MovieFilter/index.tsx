import { Controller, useForm } from 'react-hook-form';
import { Genre } from 'types/genre';
import { useEffect, useState } from 'react';
import { requestBackend } from 'utils/requests';
import Select from 'react-select';

import './styles.css';

export type MovieFilterData = {
  genre: Genre | null;
};

type Props = {
  onSubmitFilter: (data: MovieFilterData) => void;
};

const ProductFilter = ({ onSubmitFilter }: Props) => {
  const [selectGenres, setSelectGenres] = useState<Genre[]>([]);

  const { handleSubmit, setValue, getValues, control } =
    useForm<MovieFilterData>();

  const onSubmit = (formData: MovieFilterData) => {
    onSubmitFilter(formData);
  };

  const handleChangeGenre = (value: Genre) => {
    setValue('genre', value);
    const obj: MovieFilterData = {
      genre: getValues('genre'),
    };
    onSubmitFilter(obj);
  };

  useEffect(() => {
    requestBackend({ url: '/genres', withCredentials: true }).then(
      (response) => {
        setSelectGenres(response.data);
      }
    );
  }, []);

  const customStyles = {
    control: () => ({
      display: "flex",
      boxShadow: "none",
      border: "1px solid #ffffff"
    })
  };

  return (
    <div className="base-card movie-filter-container">
      <form onSubmit={handleSubmit(onSubmit)} className="movie-filter-form">
        <div className="movie-filter-botton-container">
          <div className="movie-filter-genre-container">
            <Controller
              name="genre"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  styles={customStyles}
                  options={selectGenres}
                  isClearable
                  placeholder="Gênero"
                  classNamePrefix="movie-filter-select"
                  onChange={(value: Genre | null) =>
                    handleChangeGenre(value as Genre)
                  }
                  getOptionLabel={(genre: Genre) => genre.name}
                  getOptionValue={(genre: Genre) => String(genre.id)}
                />
              )}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProductFilter;
