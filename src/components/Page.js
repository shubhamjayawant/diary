import React from 'react';
import {ToolBar} from './ToolBar';
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import {HotKeys} from 'react-hotkeys';
import {Notifier, openSnackbar } from './Notifier';
import {NoteTitleContainer} from '../containers/NoteTitleContainer';
import {NoteBodyContainer} from '../containers/NoteBodyContainer';
import Fab from '@material-ui/core/Fab';
import {SaveOutlined} from '@material-ui/icons/';
// TODO : Change state when state of children change
export class Page extends React.Component {

  constructor (props) {
    super(props);
    this.state = {title : 'untitled',
                  body : []};
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
    let message = '';
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

              message = 'SAVED NOTE SUCCESSFULLY';

            } else {

              message = 'SOMETHING WENT WRONG';

            }
          })
        .catch(
          console.log('SOMETHING WENT WRONG')
        )

    console.log(message)
    openSnackbar({ message: message });
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
          <NoteTitleContainer value = {this.state.title}/>
          <br/>
          <ToolBar />
          <br/>
          <ContextMenuTrigger id="some_unique_identifier">
            <NoteBodyContainer value = {this.state.body}/>
          </ContextMenuTrigger>

          <ContextMenu id="some_unique_identifier">
            <MenuItem data={{foo: 'bar'}} onClick={this.handleClick}>
              Add video
            </MenuItem>
            <MenuItem data={{foo: 'bar'}} onClick={this.handleClick}>
              Add image
            </MenuItem>
            <MenuItem divider />
            <MenuItem data={{foo: 'bar'}} onClick={this.handleClick}>
              Draw
            </MenuItem>
          </ContextMenu>
        </HotKeys>
        <Fab style={fabStyle} onClick = {this.saveNote} >
          <SaveOutlined/>
        </Fab>
      </div>
    );
  }
}
