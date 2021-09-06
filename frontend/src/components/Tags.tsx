import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import   PersonAdd  from '@material-ui/icons/PersonAdd';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import React from 'react';
import { useHomeStyles } from '../pages/Home';
import { useSelector } from 'react-redux';
import { selectIsLoaded, selectTagsItems } from '../store/ducks/actualThemes/selector';
import { log } from 'node:console';
import { Link } from 'react-router-dom';
interface TagsProps{
 classes:ReturnType<typeof useHomeStyles>;
};

export const Tags:React.FC<TagsProps>=({classes}:TagsProps):React.ReactElement |null=>{
    const items=useSelector(selectTagsItems);
    const isLoaded=useSelector(selectIsLoaded);
    if(!isLoaded){
        return null;
    }
 return (        
  <Paper>
  <Paper>
      <b>actualnye temy</b>
  </Paper>
  <List>
      {
          items.map(obj=>(
           <Link to={`/tags/${obj.name}`}>
            <ListItem key={obj._id}>
            <ListItemText
            primary={obj.name}
            secondary={
                <Typography>
                    tvitov:{obj.count}
                </Typography>
            }
            />
        </ListItem>

           </Link>
          ))
      }
      <Divider component="li"/>
      {/* <ListItem>
          <ListItemText
          primary="belarus"
          secondary={
              <Typography>
                  tvitov:123654
              </Typography>
          }
          
          />
      </ListItem> */}
      <Divider component="li"/>

  </List>
  <Paper>
      <Paper>
          <b>kogo chitat</b>
      </Paper>
      <List>
          <ListItem>
              <ListItemAvatar>
                  <Avatar alt="Vashe imya"/>
              </ListItemAvatar>
              <ListItemText
              primary="Dock Of Shame"
              secondary={
                  <Typography component="span">
                      @mammedov
                  </Typography>
              }
              />
              <Button color="primary">
                  <PersonAdd/>
              </Button>
                  
          </ListItem>
          <Divider component="li"/>
      </List>
  </Paper>
</Paper>


 );
}

function selectTagsLoaded(selectTagsLoaded: any) {
    throw new Error('Function not implemented.');
}
