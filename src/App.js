import React from 'react';
import {NoteIndex} from './components/NoteIndex';
import './App.css';

export function App (props) {
    console.log(props)
    return (
      <div className="App">
        <NoteIndex history = {props.history}/>
      </div>
    );
}
