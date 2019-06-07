import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import 'bootstrap/dist/css/bootstrap.css';

export class NoteBody extends React.Component {

  constructor (props) {
    super(props);
    this.state = {value : this.props.value}
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.state.value) {
      this.setState({value : nextProps.value})
    }
  }

  render() {
    const textFontSize = 20;
    const parentStyle = {width: '80%', padding : 15};
    return(
      <Paper className = "mx-auto" style={parentStyle}>
        <InputBase
          value = {this.state.value}
          rows = {Math.ceil((window.innerHeight * 0.85) / textFontSize)}
          rowsMax = {Math.ceil((window.innerHeight * 0.85) / textFontSize)}
          inputProps={{style: {fontSize: textFontSize}}}
          fullWidth = {true}
          multiline={true}
          onChange = {(e) => this.setState({value : e.target.value})}/>
      </Paper>
    );
  }
}
