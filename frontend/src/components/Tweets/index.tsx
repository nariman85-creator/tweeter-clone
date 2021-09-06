import React from 'react';
import classNames from 'classnames';

import  Avatar from '@material-ui/core/Avatar';
import  Paper from '@material-ui/core/Paper';
import  Typography  from '@material-ui/core/Typography';
import CommentIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RepostIcon from '@material-ui/icons/RepeatOutlined';
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ReplyIcon from '@material-ui/icons/ReplyOutlined';
import IconButton from '@material-ui/core/IconButton';
import {useHomeStyles} from '../../pages/Home';
import { Link } from 'react-router-dom';
import {formatDate} from "../../utils/formatDate";
import {MoreVert} from "@material-ui/icons";
import {Menu, MenuItem} from "@material-ui/core";


interface TweetProps{
    _id:string;
    text:string;
    classes:ReturnType<typeof useHomeStyles>;
    createdAt:string;
    user?:{
        fullname:string,
        username:string,
        avatarUrl:string,
    };
}
export const Tweets:React.FC<TweetProps>=({classes,user,text,_id,createdAt}):React.ReactElement | null=>{
    const [anchorEl,setAnchorEl]=React.useState<null|HTMLElement>(null);
    const open=Boolean(anchorEl);
    const handleClick=(e:any)=>{
        setAnchorEl(e.currentTarget);
    };
    const handleClose=()=>{
        setAnchorEl(null);
    };
    if(!user){
        return null;
    };

    return (
                <Paper variant="outlined" className={classNames(classes.tweet,classes.tweetsHeader)}>
                    <Link to={`/home/tweet/${_id}`}>
                        <div>
                            <Avatar srcSet={user.avatarUrl} alt={`user avatar ${user.fullname}`}
                                    className={classes.tweetAvatar}
                                    src={user.avatarUrl} />
                            <Typography>
                                <b>{user.fullname}</b><span className={classes.tweetsUserName}>@{user.username}</span>&nbsp;
                                <span className={classes.tweetsUserName}>-</span>&nbsp;

                                <span className={classes.tweetsUserName}>{formatDate(new Date(createdAt))}</span>&nbsp;
                            </Typography>
                            <Typography variant="h4">
                                {text}
                            </Typography>
                            <div className={classes.tweetFooter}>
                                <div>
                                    <IconButton>
                                        <CommentIcon style={{fontSize:18}}/>
                                    </IconButton>
                                    <span>1</span>
                                </div>
                                <div>
                                    <IconButton>
                                        <RepostIcon style={{fontSize:18}}/>
                                    </IconButton>
                                </div>
                                <div>
                                    <IconButton>
                                        <LikeIcon style={{fontSize:18}}/>
                                    </IconButton>
                                </div>
                                <div>
                                    <IconButton>
                                        <ReplyIcon style={{fontSize:18}}/>
                                    </IconButton>
                                </div>


                            </div>
                            <div>
                                <IconButton
                                    aria-label="more"
                                  onClick={handleClick}  >
                                    <MoreVert/>
                                </IconButton>
                                <Menu open={open}
                                      anchorEl={anchorEl}
                                      keepMounted
                                      onClose={handleClose}>
                                    <MenuItem onClick={handleClose}>
                                        Ркдактировать твит
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        Удалить твит
                                    </MenuItem>
                                </Menu>
                            </div>


                        </div>
                    </Link>
              </Paper>

    )
};

