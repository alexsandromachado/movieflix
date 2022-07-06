import { ReactComponent as MainImage } from 'assets/images/main-image.svg';
import { AuthContext } from 'AuthContext';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';
import { getTokenData } from 'utils/auths';
import { requestBackendLogin } from 'utils/requests';
import { saveAuthData } from 'utils/storage';
import './styles.css';

type FormData = {
  username: string;
  password: string;
};

type LocationState = {
  from: string;
};

const Login = () => {
  const location = useLocation<LocationState>();

  const { from } = location.state || { from: { pathname: '/movies' } };

  const { setAuthContextData } = useContext(AuthContext);

  const [hasError, setHasError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const history = useHistory();

  const onSubmit = (formData: FormData) => {
    requestBackendLogin(formData)
      .then((response) => {
        saveAuthData(response.data);
        setHasError(false);
        setAuthContextData({
          authenticated: true,
          tokenData: getTokenData(),
        });
        history.replace(from);
      })
      .catch((error) => {
        setHasError(true);
        console.log('ERRO', error);
      });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>LOGIN</h1>
        {hasError && (
          <div className="alert alert-danger">
            Erro ao tentar efetuar o login
          </div>
        )}
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register('username', {
              required: 'Campo obrigatório',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Email inválido',
              },
            })}
            type="text"
            className={`form-control base-input login-input ${
              errors.username ? 'is-invalid' : ''
            }`}
            id="email"
            placeholder="Email"
          />
          <div className="invalid-feedback d-block">
            {errors.username?.message}
          </div>

          <input
            {...register('password', {
              required: 'Campo obrigatório',
            })}
            type="text"
            className={`form-control base-input login-input ${
              errors.password ? 'is-invalid' : ''
            }`}
            id="password"
            placeholder="Senha"
          />
           <div className="invalid-feedback d-block">
            {errors.password?.message}
          </div>

            <button className="btn btn-primary btn-lg login-button">
              FAZER LOGIN
            </button>
        </form>
      </div>
      <div className="img-card">
        <h1>Avalie Filmes</h1>
        <h3>Diga o que você achou do seu filme favorito</h3>
        <div className="image-container">
          <MainImage />
        </div>
      </div>
    </div>
  );
};

export default Login;
