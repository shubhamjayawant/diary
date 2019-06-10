import React from 'react';
import {NoteTitle} from '../components/NoteTitle';

export function NoteTitleContainer (props) {
    return <NoteTitle value = {props.value}
                      className = 'fixed-top'
                      onChangeHandler = {props.onChangeHandler}/>;
}
