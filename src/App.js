import React, { Component } from 'react';
import {withAuthenticator, AmplifySignOut} from "@aws-amplify/ui-react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import TimeSheetView from './components/TimeSheetView';
import ProjectView from './components/ProjectView';

class App extends Component {
  render() {
  return (
    <HashRouter>
    <div className="App">
    <div id="root">
      <div className="ui menu">
        {/* <a className="item">Time Sheet</a>
        <a className="item">Overview </a> */}
        {/* <a class="item">Upcoming Events</a> */}
        <li className="item"><NavLink to="/">Time Sheet</NavLink></li>
        <li className="item"><NavLink to="/projects">Projects</NavLink></li>
        <AmplifySignOut />
      </div>
      <div id="content">
        <Route exact path="/" component={TimeSheetView}/>
        <Route path="/projects" component={ProjectView}/>
      </div>
    </div>
    </div>
    </HashRouter>
  );
  }
}

export default withAuthenticator(App,true);
// export default App;