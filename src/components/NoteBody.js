import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import 'bootstrap/dist/css/bootstrap.css';

export class NoteBody extends React.Component {
  render() {
    const textFontSize = 20;
    const parentStyle = {marginLeft:20};

    return(
      <Paper className = "mx-auto" style={{width: '80%'}}>
        <InputBase
          defaultValue = {this.props.value}
          rows = {Math.ceil(window.innerHeight / textFontSize)}
          inputProps={{style: {fontSize: textFontSize}}}
          fullWidth = {true} multiline={true} />
      </Paper>
  );
  }
}
