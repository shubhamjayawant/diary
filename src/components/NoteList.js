import React from 'react'
import NoteIcon from '@material-ui/icons/Note';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

export class NoteList extends React.Component {

  constructor (props) {
    super(props);
  }

  onDeleteButtonClickListener (index, event) {
    fetch("http://127.0.0.1:5000/notes/" + this.props.value[index].id, {
        method: 'DELETE',
        mode: 'cors'
    }).then(res => res.json())
    .then((result) => {
        this.props.onUpdate(result.data)
      }
    )
    .catch(err => console.log(err));
  }

  getListItems() {
      return this.props.value.map((item, index) =>
        <ListItem key = {index}>
          <ListItemAvatar>
            <Avatar>
              <NoteIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={item.title.length < 30 ?
                      item.title :
                      item.title.substring(0, 27) + '...'}
            secondary= {item.created}
          />
          <ListItemSecondaryAction>
            <IconButton id = {index} onClick = {this.onDeleteButtonClickListener.bind(this, index)}>
              <DeleteIcon/>
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
    )
  }

  render () {

    if (this.props.value.length > 0) {
      return (
        <div style = {{width : '60%'}}>
          <List>
            {this.getListItems()}
          </List>
        </div>
      );
    }
    else {
      return "Welcome to Notepad. Click on the pencil icon to create your first note"
    }
  }
}
