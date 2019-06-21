import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {Page} from './components/Page';
import {NoteIndex} from './components/NoteIndex';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render(
      <div>
        <BrowserRouter>
           <Switch>
              <Route path='/page' component={Page} />
              <Route path='/noteindex' component={NoteIndex} />
              <Route path='/' component={App} />
           </Switch>
        </BrowserRouter>
     </div>, document.getElementById('root'));

// ReactDOM.render(<App/>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
