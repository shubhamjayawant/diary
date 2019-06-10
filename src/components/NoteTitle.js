import React from 'react';
import InputBase from '@material-ui/core/InputBase';

export class NoteTitle extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
        this.props.onChangeHandler()
    }
  }

  render() {
    const headerFontSize = 30;
    return <InputBase value = {this.props.value}
      fullWidth = {true}
      inputProps={{style: {fontSize: headerFontSize, textAlign : 'center'}}}
      onChange = {this.props.onChangeHandler}/>
  }
}
