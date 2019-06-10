import React from 'react';
import {ToolBar} from './ToolBar';
import {HotKeys} from 'react-hotkeys';
import {Notifier, openSnackbar } from './Notifier';
import {NoteTitleContainer} from '../containers/NoteTitleContainer';
import {NoteBodyContainer} from '../containers/NoteBodyContainer';
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
    if (event && ('target' in event) && (event.target.value) !== this.state.title){
        this.setState({title : event.target.value})
    }
  }
  onBodyChangeHandler (event) {
    if (event && ('target' in event) && (event.target.value) !== this.state.body){
          this.setState({body : event.target.value})
      }
  }

  componentDidMount () {
    if (this.props.id) {
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
      .catch(
        console.log("Fellas, it's happening")
      )
    }
  }

  handleClick(e, data) {
    console.log(data.foo);
  }

  saveNote(event) {
    event.preventDefault();
    let method = '';
    let url = '';
    if (this.props.id) {
      url = "http://127.0.0.1:5000/notes/" + this.props.id;
      method = 'PUT';
    } else {
      url = "http://127.0.0.1:5000/notes/";
      method = 'POST';
    }
    fetch(url, {
      method: method,
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
        event.preventDefault()
      }
    });
    const keyMap = {
        save: 'ctrl+s',
    }
    const handlers = {
      'save': (event) => this.saveNote(event)
    };
    const fabStyle = {
      position: 'absolute',
      bottom: 10,
      right: 10,
    };
    return (
      <div>
        <Notifier/>
        <HotKeys keyMap={keyMap} handlers={handlers}>
          <NoteTitleContainer value = {this.state.title}
                              onChangeHandler = {this.onTitleChangeHandler}/>
          <br/>
          <ToolBar />
          <br/>
          <NoteBodyContainer value = {this.state.body}
                            onChangeHandler = {this.onBodyChangeHandler}/>
        </HotKeys>
        <Fab style={fabStyle} onClick = {this.saveNote} >
          <SaveOutlined/>
        </Fab>
      </div>
    );
  }
}
