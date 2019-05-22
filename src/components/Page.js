import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";

export class Page extends React.Component {
  handleClick(e, data) {
    console.log(data.foo);
  }
  render() {
    const fontSize = 20;
    return (

      <div>
        <ContextMenuTrigger id="some_unique_identifier">
          <InputBase rows = {Math.ceil(window.innerHeight / fontSize)}
                  inputProps={{style: {fontSize: fontSize}}}
                  fullWidth = {true} multiline={true} />
        </ContextMenuTrigger>

        <ContextMenu id="some_unique_identifier">
          <MenuItem data={{foo: 'bar'}} onClick={this.handleClick}>
            ContextMenu Item 1
          </MenuItem>
          <MenuItem data={{foo: 'bar'}} onClick={this.handleClick}>
            ContextMenu Item 2
          </MenuItem>
          <MenuItem divider />
          <MenuItem data={{foo: 'bar'}} onClick={this.handleClick}>
            ContextMenu Item 3
          </MenuItem>
        </ContextMenu>
      </div>
            );
  }
}
