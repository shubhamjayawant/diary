import React from 'react';
import {VideoCallOutlined, AddAPhotoOutlined, BrushOutlined} from '@material-ui/icons/';

export class ToolBar extends React.Component {
  render () {
    const parentStyle = {padding : 5};
    return (
      <div className = "toolbar" style = {parentStyle}>
        <VideoCallOutlined style = {{marginRight : 50}}/>
        <AddAPhotoOutlined/>
        <BrushOutlined style = {{marginLeft : 50}}/>
      </div>
    );
  }
}
