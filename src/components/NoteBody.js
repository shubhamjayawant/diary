import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import 'bootstrap/dist/css/bootstrap.css';

export class NoteBody extends React.Component {

  render() {
    const textFontSize = 20;
    const parentStyle = {width: '80%', padding : 15};
    return(
      <Paper className = "mx-auto" style={parentStyle}>
        <InputBase
          value = {this.getContent()}
          rows = {Math.ceil((window.innerHeight * 0.85) / textFontSize)}
          rowsMax = {Math.ceil((window.innerHeight * 0.85) / textFontSize)}
          inputProps={{style: {fontSize: textFontSize}}}
          fullWidth = {true} multiline={true} />
      </Paper>
  );
  }

  getContent() {

    const reducer = (accumulator, item) => accumulator + item.content + '\n';

    if (typeof this.props.data === 'undefined' || this.props.data.length === 0) {

      return 'Note body'

    } else {

      return this.props.data.reduce(reducer,'');

    }

  }
}
