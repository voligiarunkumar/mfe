import React, { lazy, Suspense, useState ,useEffect} from "react";

import Header from "./components/Header";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import {createBrowserHistory} from 'history';

const MarketingLazy = lazy(() => import("./components/MarketingApp"));
const AuthAppLazy = lazy(() => import("./components/AuthApp"));
const DashboardLazy=lazy(()=>import('./components/DashboardApp'));
const generateClassName = createGenerateClassName({
  productionPrefix: "ca",
});
const history=createBrowserHistory();

export default () => {
  const [issignedIn, setIsSignedIn] = useState(false);
  useEffect(()=>{
if(issignedIn)
{
  history.push('/Dashboard');
}
  },[issignedIn])
  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header
            onSignOut ={()=>setIsSignedIn(false)}
            isSignedIn={issignedIn}
          ></Header>
          <Suspense fallback={<div>Laoding....</div>}>
            <Switch>
              <Route path="/auth">
                <AuthAppLazy onSignIn={() => setIsSignedIn(true)}></AuthAppLazy>
              </Route>
              <Route path="/Dashboard" >
                {!issignedIn && <Redirect to='/'/>}
                <DashboardLazy></DashboardLazy>
                </Route>
              <Route path="/" component={MarketingLazy}></Route>
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </Router>
  );
};
