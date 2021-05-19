import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import {BrowserRouter as Router , Switch,Route} from 'react-router-dom';
import SearchPage from './components/SearchPage';

function App() {
  return (
    <div className="app">
      <Router>
      <Header/>
        <Switch>
          <Route exact path="/airbnb-clone">
          <Home/>
          </Route>
          <Route path="/search">
            <SearchPage/>
          </Route>
        </Switch>
      </Router>
 
    </div>
  );
}

export default App;
