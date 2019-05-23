import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import {ToolBar} from './ToolBar';
import Paper from '@material-ui/core/Paper';
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import {HotKeys} from 'react-hotkeys';
import Snackbar from '@material-ui/core/Snackbar';

export class Page extends React.Component {

  handleClick(e, data) {
    console.log(data.foo);
  }

  openSnackBar(event) {
    console.log('Snackbar code')
  }

  render() {

    document.body.addEventListener('keydown', event => {
      if (event.ctrlKey && 's'.indexOf(event.key) !== -1) {
        event.preventDefault()
      }
    });

    const textFontSize = 20;
    const headerFontSize = 30;

    const keyMap = {
        save: 'ctrl+s',
    }

    const handlers = {
      'save': (event) => this.openSnackBar(event)
      // 'save': (event) => {{openSnackBar}}
    };

    return (

      <div>
        <HotKeys keyMap={keyMap} handlers={handlers}>
          <InputBase defaultValue = 'Untitled0' inputProps={{style: {fontSize: headerFontSize}}}/>
          <br/>
          <ToolBar />
          <br/>
          <ContextMenuTrigger id="some_unique_identifier">
            <Paper>
              <InputBase rows = {Math.ceil(window.innerHeight / textFontSize)}
                      inputProps={{style: {fontSize: textFontSize}}}
                      fullWidth = {true} multiline={true} />
            </Paper>
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
      </div>
            );
  }
}
