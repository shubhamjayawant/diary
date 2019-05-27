import React from 'react';
import {ToolBar} from './ToolBar';
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import {HotKeys} from 'react-hotkeys';
import {Notifier, openSnackbar } from './Notifier';
import {NoteTitleContainer} from '../containers/NoteTitleContainer';
import {NoteBodyContainer} from '../containers/NoteBodyContainer';
import Fab from '@material-ui/core/Fab';
import {SaveOutlined} from '@material-ui/icons/';

export class Page extends React.Component {

  handleClick(e, data) {
    console.log(data.foo);
  }

  openSnackBar(event) {
    event.preventDefault();
    openSnackbar({ message: 'Document saved!' });
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
      'save': (event) => this.openSnackBar(event)
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
          <NoteTitleContainer value = 'Untitled0'/>
          <br/>
          <ToolBar />
          <br/>
          <ContextMenuTrigger id="some_unique_identifier">
            <NoteBodyContainer value = "Note body"/>
          </ContextMenuTrigger>

          <ContextMenu id="some_unique_identifier">
            <MenuItem data={{foo: 'bar'}} onClick={this.handleClick}>
              Add image
            </MenuItem>
            <MenuItem data={{foo: 'bar'}} onClick={this.handleClick}>
              Add video
            </MenuItem>
            <MenuItem divider />
            <MenuItem data={{foo: 'bar'}} onClick={this.handleClick}>
              Draw
            </MenuItem>
          </ContextMenu>
        </HotKeys>
        <Fab style={fabStyle} onClick = {this.openSnackBar} >
          <SaveOutlined/>
        </Fab>
      </div>
            );
  }
}
