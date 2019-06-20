import React from 'react';
import {Notifier, openSnackbar } from './Notifier';
import {NoteTitle} from './NoteTitle';
import {NoteBody} from './NoteBody';
import Fab from '@material-ui/core/Fab';
import {SaveOutlined} from '@material-ui/icons/';

export class Page extends React.Component {

  constructor (props) {
    super(props);
    this.state = {title : 'untitled', body : ''};
    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this)
    this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this)
  }

  onTitleChangeHandler (event) {
    if (event &&
        ('target' in event) &&
        (event.target.value) !== this.state.title){
        this.setState({title : event.target.value})
    }
  }
  onBodyChangeHandler (event) {
    if (event &&
        ('target' in event) &&
        (event.target.value) !== this.state.body){
          this.setState({body : event.target.value})
      }
  }

  componentDidMount () {
    fetch("http://127.0.0.1:5000/notes/" + this.props.id)
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          title: result.data.title,
          body: result.data.body
        });
      },
      (error) => {
        console.log(error);
      }
    )
  }

  saveNote(event) {
    fetch("http://127.0.0.1:5000/notes/" + this.props.id, {
      method: 'PUT',
      body: JSON.stringify({
        title : this.state.title,
        body : this.state.body})})
    .then((result) => {
        if (result.status === 201) {
          openSnackbar({ message: 'SAVED NOTE SUCCESSFULLY'});
        } else {
          openSnackbar({ message: 'SOMETHING WENT WRONG'});
        }
      })
  }

  render() {
    document.body.addEventListener('keydown', event => {
      if (event.ctrlKey && 's'.indexOf(event.key) !== -1) {
        event.preventDefault();
        noteSaver(event);
      }
    });

    const fabStyle = {
      position: 'absolute',
      bottom: '3%',
      right: '3%',
    };

    const noteSaver = (event) => this.saveNote(event);

    return (
      <div>
        <Notifier/>
          <NoteTitle value = {this.state.title}
                      onChangeHandler = {this.onTitleChangeHandler}/>
          <br/>
          <br/>
          <NoteBody value = {this.state.body}
                    onChangeHandler = {this.onBodyChangeHandler}/>
        <Fab style={fabStyle} onClick = {noteSaver} >
          <SaveOutlined/>
        </Fab>
      </div>
    );
  }
}
