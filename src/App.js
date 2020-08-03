import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import {withAuthenticator, AmplifySignOut} from "@aws-amplify/ui-react";
import ProjectListLoader from './components/ProjectList';
import ProjectAdder from './components/ProjectAdder';

class App extends Component {
  render() {
  return (
    <div className="App">
    <div id="root">
      <div className="ui menu">
        <a className="item">Time Sheet</a>
        <a className="item">Overview </a>
        {/* <a class="item">Upcoming Events</a> */}
        <AmplifySignOut />
      </div>
      <Header as='h1'>Hello World!</Header>
      <div className="ui vertically divided grid">
        <div className="two column row">
          <div className="column">
            {/* <img src="https://react.semantic-ui.com/images/wireframe/paragraph.png" class="ui image" /> */}
            <ProjectListLoader />
            {/* <button onClick={this.listQuery}>GraphQL Query</button> */}
          </div>
          <div className="column">
            {/* <img src="https://react.semantic-ui.com/images/wireframe/paragraph.png" class="ui image" /> */}
            <ProjectAdder />
          </div>
        </div>
        <div className="three column row">
          <div className="column">
            <img src="https://react.semantic-ui.com/images/wireframe/paragraph.png" className="ui image" />
          </div>
          <div className="column">
            <img src="https://react.semantic-ui.com/images/wireframe/paragraph.png" className="ui image" />
          </div>
          <div className="column">
            <img src="https://react.semantic-ui.com/images/wireframe/paragraph.png" className="ui image" />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
  }
}

export default withAuthenticator(App,true);
// export default App;