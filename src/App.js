import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ProfileContainer from "./containers/ProfileContainer";
import DashboardContainer from "./containers/DashboardContainer";
import {RouteNames} from "./routers/RouteNames";
import SidebarComponent from "./components/SidebarComponent";
import TableContainer from "./containers/TableContainer";

class App extends Component {
  render() {
      console.log("DUCNT", this.props)
    return (
        <div className="wrapper">
            <BrowserRouter basename={"/"}>
                <div>
                <SidebarComponent/>
                <Switch>
                    <Route exact path={RouteNames.DASHBOARD} render={() => <DashboardContainer/>}/>
                    <Route exact path={RouteNames.PROFILE} render={() => <ProfileContainer/>}/>
                    <Route exact path={RouteNames.TABLE} render={() => <TableContainer/>}/>
                </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
  }
}

export default App;
