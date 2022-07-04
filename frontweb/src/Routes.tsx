import { Switch, Route, Router } from 'react-router-dom';
import Home from 'pages/Home';
import Navbar from 'components/Navbar';
import Catalog from 'pages/Catalog';
import MovieDetails from 'pages/MovieDetails';
import history from 'utils/history';

const Routes = () => (
  <Router history={history}>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/catalog">
        <Catalog />
      </Route>
      <Route path="/details">
        <MovieDetails />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
