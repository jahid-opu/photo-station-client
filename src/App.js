import logo from './logo.svg';
import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import AddServices from './components/Dashboard/AddServices/AddServices';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Orders from './components/Orders/Orders';
import Details from './components/Details/Details';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import ManageServices from './components/Dashboard/ManageServices/ManageServices';

export const UserContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <Router>
         <Switch>
          <PrivateRoute path="/addservices">
            <AddServices/>
          </PrivateRoute>
          <PrivateRoute path="/manageService">
            <ManageServices/>
          </PrivateRoute>
          <PrivateRoute path="/checkout/:id">
            <Checkout/>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard/>
          </PrivateRoute>
          <Route path="/details/:id">
            <Details/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/orders">
            <Orders/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
          
        </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
