import React from 'react';
import {NoteTitle} from '../components/NoteTitle';

export function NoteTitleContainer (props) {
  // Later this will have db fetching
  return <NoteTitle value = {props.value}/>;
}
