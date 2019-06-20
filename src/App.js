import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import {NoteIndex} from './components/NoteIndex';
import {Page} from './components/Page';
import './App.css';

export class App extends React.Component {

  render() {

    const routing = (
      <Router>
        <div>
          <Route path="/" component={App} />
          <Route path="/noteIndex" component={NoteIndex} />
          <Route path="/notePage" component={Page} />
        </div>
      </Router>
    )

      return (
        <div className="App">
          <NoteIndex/>
        </div>
      );
  }
}
