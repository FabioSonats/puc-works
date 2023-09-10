
import { useAuthContext } from './hooks/useAuthContext';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
 // pages components
import Navbar from './components/Navbar'; 
import Home from './pages/home/Home';
import Create from './pages/create/Create';
import Search from './pages/search/Search';
import Recipe from './pages/recipe/Recipe';
import Signup from './signup/Signup';
import Login from './login/Login';
import './App.css'


function App() {
  const { user } = useAuthContext()


  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
        <Route exact path='/'>
          {!user && <Redirect to="/login" />}
          {user && <Home />
         } 
          </Route> 
          <Route path='/login'>
           {user && <Redirect to="/" />}
           {!user && <Login />}
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
          {user && <Redirect to="/" />}
          {!user &&  <Signup />} 
        </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App