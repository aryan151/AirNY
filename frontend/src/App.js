import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Listings from "./components/Listings";
import Home from "./components/Home";
import OneListing from "./components/OneListing/OneListing";
import Dashboard from './components/Dashboard'
function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />  
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <Home />  
          </Route>
          <Route exact path="/listings">   
            <Listings /> 
          </Route>  
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/listings/:listingId"> 
            <OneListing />
          </Route>  
          <Route exact path="/users/:userId">
            <Dashboard />
          </Route>
        </Switch>
      )}
    </>
  );
}
  
export default App;