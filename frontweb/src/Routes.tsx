import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Navbar from 'components/Navbar';
import Catalog from 'pages/Catalog';
import MovieDetails from 'pages/MovieDetails';

const Routes = () => (
  <BrowserRouter>
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
  </BrowserRouter>
);

export default Routes;
