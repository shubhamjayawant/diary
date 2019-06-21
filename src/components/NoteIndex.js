import React from 'react';
import Fab from '@material-ui/core/Fab';
import {CreateOutlined} from '@material-ui/icons/';
import {NoteList} from './NoteList';

export class NoteIndex extends React.Component {

  constructor (props) {
    super(props);
    this.createNote = this.createNote.bind(this);
    this.updateNotes = this.updateNotes.bind(this);
    this.state = {notes : []};
  }

  componentDidMount () {
    fetch("http://127.0.0.1:5000/notes")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          notes: result.data,
        });
      },
      (error) => {
        console.log(error);
      }
    )
  }

  createNote () {
    fetch("http://127.0.0.1:5000/notes", {
      method: 'POST',
      body: JSON.stringify({
        title : 'untitled',
        body : ''})})
    .then((result) => {
        if (result.status === 400) {
            throw 'Invalid data posted';
        }
        return result
      },
        (error) => {
          console.log(error);
        })
    .then(res => res.json())
    .then(
      (result) => {
        this.props.history.push({
          pathname : '/page',
          id : result.data});
      }
    )
  }

  updateNotes (newNotes) {
    this.setState({
      notes : newNotes
    })
  }

  render () {
    const fabStyle = {
      position: 'fixed',
      bottom: '3%',
      right: '3%',
    }

    return(
      <div style = {{marginTop : 10, overflow: 'auto'}}>
        <center>
          <NoteList
            value = {this.state.notes}
            onUpdate = {this.updateNotes}
            history = {this.props.history}/>
        </center>
        <Fab style={fabStyle} onClick = {this.createNote}>
          <CreateOutlined/>
        </Fab>
      </div>);
  }
}
