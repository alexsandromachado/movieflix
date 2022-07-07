import { Switch, Route, Router } from 'react-router-dom';
import Login from 'pages/Login';
import Navbar from 'components/Navbar';
import Catalog from 'pages/Catalog';
import MovieDetails from 'pages/MovieDetails';
import history from 'utils/history';
import PrivateRoute from 'components/PrivateRoute';

const Routes = () => (
  <Router history={history}>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Login />
      </Route>
      <PrivateRoute path="/movies">
        <Route path="/movies" exact>
          <Catalog />
        </Route>
        <Route path="/movies/:movieId">
          <MovieDetails />
        </Route>
      </PrivateRoute>
    </Switch>
  </Router>
);

export default Routes;
