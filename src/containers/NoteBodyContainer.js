import React from 'react';
import {NoteBody} from '../components/NoteBody';

export function NoteBodyContainer (props) {

    return <NoteBody value = {props.value}
                     onChangeHandler = {props.onChangeHandler}/>;

}
