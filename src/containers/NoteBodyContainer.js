import React from 'react';
import {NoteBody} from '../components/NoteBody';

export function NoteBodyContainer (props) {
  // Later this will have db fetching
  return <NoteBody value = {props.value} data = {props.data}/>;
}
