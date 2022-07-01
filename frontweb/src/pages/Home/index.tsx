import { ReactComponent as MainImage } from 'assets/images/main-image.svg';
import { Link } from 'react-router-dom';

import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="login-card">
        <h1>LOGIN</h1>
        <input
          type="text"
          className="form-control login-input"
          id="email"
          placeholder="Email"
          required
        />

        <input
          type="text"
          className="form-control login-input"
          id="password"
          placeholder="Senha"
          required
        />

        <Link to="/catalog">
          <button className="btn btn-primary btn-lg login-button">
            FAZER LOGIN
          </button>
        </Link>
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

export default Home;
