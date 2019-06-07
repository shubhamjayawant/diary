import React from 'react';
import {NoteBody} from '../components/NoteBody';

export class NoteBodyContainer extends React.Component {

  render() {

    return <NoteBody value = {this.getContent()}/>;

  }

  getContent() {
    if (this.props.hasOwnProperty('value')) {
        const reducer = (accumulator, item) => accumulator + item.content + '\n';
        return this.props.value.reduce(reducer,'');;
    } else {
      return 'Note body'
    }
  }

}
