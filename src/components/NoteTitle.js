import React from 'react';
import InputBase from '@material-ui/core/InputBase';

export class NoteTitle extends React.Component {
  render() {
    const headerFontSize = 30;
    return <InputBase defaultValue = {this.props.value} inputProps={{style: {fontSize: headerFontSize}}}/>;
  }
}
