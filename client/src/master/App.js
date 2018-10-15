// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload. yo yo yo go
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org" 
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;


import * as React from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import { 
  Main,
} from '../containers';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact={true} path="/" component={Main} />
          {/* <Route exact={true} path="/id/:id" component={Ledger} />
          <Route exact={true} path="/new" component={Add} /> */}
        </div>
      </Router>
    );
  }
}

export default App;