import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
            <Route path="/home">
              <Home/>
          </Route>
          
          <Route path="/login">
              <Login />
          </Route>
          
            <Route path="/">
              <Home/>
          </Route>
          
            
            
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
