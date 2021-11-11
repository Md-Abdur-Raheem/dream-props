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
import Properties from './Pages/Properties/Properties/Properties';
import Register from './Pages/Register/Register';
import AuthProvider from './context/AuthProvider';
import Order from './Pages/Order/Order';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>

              <Route path="/home">
                <Home/>
            </Route>

            <Route exact path="/">
                <Home/>
            </Route>
            
            <Route path="/properties">
              <Properties/>
            </Route>

            <PrivateRoute path="/order/:id">
              <Order/>
            </PrivateRoute>
            
            <Route path="/login">
                <Login />
            </Route>

            <Route path="/register">
                <Register />
            </Route>
            
              
            
              
              
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
