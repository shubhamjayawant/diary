import React from 'react';
import InputBase from '@material-ui/core/InputBase';

export class NoteTitle extends React.Component {

  constructor (props) {
    super(props)
    this.state = {value : this.props.value};
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.state.value) {
      this.setState({value : nextProps.value})
    }
  }

  render() {
    const headerFontSize = 30;
    return <InputBase value = {this.state.value}
      fullWidth = {true}
      inputProps={{style: {fontSize: headerFontSize, textAlign : 'center'}}}
      onChange = {(e) => this.setState({value : e.target.value})}/>
  }
}
