// resources
import React from "react";
import {Route, Router, Switch} from "react-router-dom";
// components
import Header from "./components/header";
// pages
import HomePage from "./pages/home/homePage";

class BrowserRouter extends React.Component {

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL} history={this.props.history}>
        <Switch>
          <Route component={Header}/>
        </Switch>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          {/*<Route exact path="/details/:id" component={GamePage}/>*/}
        </Switch>
      </Router>
    );
  }
}

export default BrowserRouter;
