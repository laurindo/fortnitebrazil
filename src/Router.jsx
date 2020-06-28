// resources
import React from "react";
import {Route, Router, Switch} from "react-router-dom";
// components
import Header from "./components/header";
// pages
import HomePage from "./pages/home/homePage";
import TournamentsPage from "./pages/tournaments/tournamentsPage";
import MapsPage from "./pages/maps/mapsPage";
import POIPage from "./pages/maps/poiPage";

class BrowserRouter extends React.Component {

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL} history={this.props.history}>
        <Switch>
          <Route component={Header}/>
        </Switch>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/torneios" component={TournamentsPage}/>
          <Route exact path="/mapas" component={MapsPage}/>
          <Route exact path="/pontos-de-interesse" component={POIPage}/>
        </Switch>
      </Router>
    );
  }
}

export default BrowserRouter;
