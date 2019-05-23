import React from 'react';
import {VideoCallOutlined, AddAPhotoOutlined, BrushOutlined} from '@material-ui/icons/';

export class ToolBar extends React.Component {
  render () {
    return (
      <div className = "toolbar">
        <VideoCallOutlined/>
        <AddAPhotoOutlined/>
        <BrushOutlined/>
      </div>
    );
  }
}
