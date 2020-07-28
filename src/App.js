import React from 'react';
import { Header } from 'semantic-ui-react';
import {withAuthenticator, AmplifySignOut} from "@aws-amplify/ui-react";

function App() {
  return (
    <div id="root">
      <div class="ui menu">
        <a class="item">Editorials</a>
        <a class="item">Reviews</a>
        <a class="item">Upcoming Events</a>
        {/* <AmplifySignOut /> */}
      </div>
      <Header as='h1'>Hello World!</Header>
      <div class="ui vertically divided grid">
        <div class="two column row">
          <div class="column">
            <img src="https://react.semantic-ui.com/images/wireframe/paragraph.png" class="ui image" />
          </div>
          <div class="column">
            <img src="https://react.semantic-ui.com/images/wireframe/paragraph.png" class="ui image" />
          </div>
        </div>
        <div class="three column row">
          <div class="column">
            <img src="https://react.semantic-ui.com/images/wireframe/paragraph.png" class="ui image" />
          </div>
          <div class="column">
            <img src="https://react.semantic-ui.com/images/wireframe/paragraph.png" class="ui image" />
          </div>
          <div class="column">
            <img src="https://react.semantic-ui.com/images/wireframe/paragraph.png" class="ui image" />
          </div>
        </div>
      </div>
    </div>
  );
}

// export default withAuthenticator(App,true);
export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hullo. Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
