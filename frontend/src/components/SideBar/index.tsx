import React, { useState } from 'react';

import TwitterIcon from '@material-ui/icons/Twitter';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import CreateIcon from '@material-ui/icons/CreateOutlined';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PerIcon from '@material-ui/icons/PermIdentityOutlined';
import { useHomeStyles } from '../../pages/Home';
import  Button from '@material-ui/core/Button';
import  Hidden from '@material-ui/core/Hidden';
import  Typography from '@material-ui/core/Typography';
import Modal from '../Modal';
import { Tweets } from '../Tweets';
import { AddTwit } from '../addTwit';
import { Link } from 'react-router-dom';
interface SideBarProps{
    classes:ReturnType<typeof useHomeStyles>;

};

export const SideBar:React.FC<SideBarProps>= ({classes}:SideBarProps):React.ReactElement => {
    const [visiblelesAddTweet,setvisiblelesAddTweet]=useState<boolean>(false);
    const handleClickAddtweet=()=>{
        setvisiblelesAddTweet(true);
    }
    const onCloseAddTweet=()=>{
        setvisiblelesAddTweet(false);
    }
    return (
                  <ul className={classes.sideMenuList}>
              <li className={classes.sideMenuListItem}>
                  <Link to="/home">
                  <IconButton  className={classes.logo}  aria-label="" color="primary">
                <TwitterIcon className={classes.logoIcon} color="primary"/>
                 </IconButton>

                  </Link>
        </li>
              <li className={classes.sideMenuListItem}>
                    <div>
                <SearchIcon className={classes.sideMenuListItemIcon} />
                <Hidden smDown>
                <Typography className={classes.sideMenuListItemLabel} variant="h6">Поиск</Typography></Hidden>

                    </div>

              </li>
              <li className={classes.sideMenuListItem}>
              <div>
                    <NotificationsIcon className={classes.sideMenuListItemIcon}/>
                    <Hidden smDown>
               <Typography className={classes.sideMenuListItemLabel}  variant="h6">Уведомление</Typography></Hidden>

              </div>
              </li>
              <li className={classes.sideMenuListItem}>
                <div>
                <MailOutlineIcon className={classes.sideMenuListItemIcon}/>
                <Hidden smDown>
                 <Typography className={classes.sideMenuListItemLabel}  variant="h6">Сообщение</Typography></Hidden>

                </div>

              </li>
              <li className={classes.sideMenuListItem}>
               <div>
                   <BookmarkBorderIcon className={classes.sideMenuListItemIcon}/>
                   <Hidden smDown>
                <Typography className={classes.sideMenuListItemLabel}  variant="h6">Закладки</Typography></Hidden>

               </div>

              </li>
              <li className={classes.sideMenuListItem}>                
               <div>
                <ListAltIcon className={classes.sideMenuListItemIcon}/>
                <Hidden>
             <Typography className={classes.sideMenuListItemLabel}  variant="h6">
                                                 Список
                                             </Typography></Hidden>

               </div>

</li>
      <li className={classes.sideMenuListItem}>
<div>                   
     <PerIcon className={classes.sideMenuListItemIcon}/>
     <Hidden smDown>
     <Typography variant="h6">Профиль</Typography></Hidden>
</div>
</li>
<li className={classes.sideMenuListItem}>
    <Button onClick={handleClickAddtweet} className={classes.sideMenuTweetButton} fullWidth color="primary" variant="contained">
        <Hidden smDown>Твитнуть</Hidden>
        <Hidden mdUp>
            <CreateIcon/>
        </Hidden>
    </Button>
    <Modal onClose={onCloseAddTweet} visible={visiblelesAddTweet} title="">
        <div style={{width:550}}>
        <AddTwit maxRows={15} classes={classes}/>

        </div>

    </Modal>
</li>
          </ul>

    )
}
