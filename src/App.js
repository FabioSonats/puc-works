import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import Create from './pages/create/Create';
import Search from './pages/search/Search';
import Recipe from './pages/recipe/Recipe';
import Signup from './signup/Signup';
import Login from './login/Login';
import { useAuthContext } from './hooks/useAuthContext'; // Importe o hook de contexto de autenticação
import { AuthContextProvider } from './caminho-para-seu-contexto-de-autenticacao'; // Importe seu contexto de autenticação
import './App.css';

function App() {
  const { user } = useAuthContext();

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            {user ? <Home /> : <Redirect to="/login" />}
          </Route>
          <Route path='/login'>
            {user ? <Redirect to="/" /> : <Login />}
          </Route>
          <Route exact path="/create">
            <Create />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/Recipes/:id">
            <Recipe />
          </Route>
          <Route path='/signup'>
            {user ? <Redirect to="/" /> : <Signup />}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;


import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { AuthContextProvider } from './caminho-para-seu-contexto-de-autenticacao'; // Importe o contexto de autenticação

test('renders learn react link', () => {
  render(
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  );
});
