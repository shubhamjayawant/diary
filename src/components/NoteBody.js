import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';

export class NoteBody extends React.Component {
  render() {
    const textFontSize = 20;
    return(
      <Paper>
        <InputBase
          defaultValue = {this.props.value}
          rows = {Math.ceil(window.innerHeight / textFontSize)}
          inputProps={{style: {fontSize: textFontSize}}}
          fullWidth = {true} multiline={true} />
      </Paper>
  );
  }
}
