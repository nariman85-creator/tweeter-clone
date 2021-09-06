import React, { useEffect } from 'react';
import classNames from 'classnames';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import {makeStyles} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { grey } from '@material-ui/core/colors';
import { Tweets } from '../components/Tweets';
import { SideBar } from '../components/SideBar';
import {AddTwit} from '../components/addTwit';
import Search from '@material-ui/icons/Search';
import { SearchTextField } from '../components/SearchTextField';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTweets } from '../store/ducks/tweets/actionCreators';
import {  selectIsLoading, selectTweetsItems } from '../store/ducks/tweets/selector';
import { fetchTagss } from '../store/ducks/actualThemes/actionCreators';
import { Tags } from '../components/Tags';
import { Route } from 'react-router';
import { BackButton } from '../components/BaskButton';
import { FullTweet } from './components/FullTweet';

 export const useHomeStyles=makeStyles((theme:Theme)=>({
    wrapper:{
        width:'100vh',
    },
    contain:{
        width:'100%',
        display:'flex',
        justifyContent:"space-around",
        flexDirection:'row',
    },
    logoIcon:{
        fontSize:36,
    },
    logo:{
        margin:'10px 0',

    },
    sideMenuList:{   
        listStyle:"none",
        padding:0,
        margin:0,
        width:230,

    },
    sideMenuListItem:{
        cursor:'pointer',
        '&:hover':{
            '& div':{
                backgroundColor:'rgba(29,161,242,.1)',
                '& h6':{
                    color:theme.palette.primary,
                },
                '& svg path':{
                    fill:theme.palette.primary,
                },

            },
        },


        '& div':{
        display:'inline-flex',
        alignItems:'center',
        padding:'0 25px 0 20px',
        borderRadius:30,
        height:50,
        marginBottom:10,
        transition:'background-color .15s easy-in-out',

        
    },

    },
    sideMenuListItemLabel:{
        fontSize:20,
        fontWeight:700,
        marginLeft:15,
    },
     sideMenuListItemIcon:{
        fontSize:28,
        marginLeft:-5,
    },
    tweet:{
        cursor:'pointer',
        paddingTop:20,
        paddingLeft:20,
        '&:hover':{
            backgroundColor:'rgb(245,248,250)',
        }
    },
    tweetAvatar:{
    width:theme.spacing(7),
    height:theme.spacing(7),
    },
    sideMenuTweetButton:{
        padding:theme.spacing(3.2),
        marginTop:theme.spacing(2),
    },
    tweetsWrapper:{
        borderRadius:0,
        height:'100%',
        borderTop:0,
        borderBottom:0,
    },
    tweetsHeader:{
        borderLeft:0,
        borderRight:0,
        borderTop:0,
        borderRadius:0,
        padding:'10px 15px', 
        '& h6':{
            fontWeight:800,
        }
    },
    tweetsUserName:{
       colors:grey[500],
    },
    tweetFooter:{
        position:'relative',
        left:-13,
        display:'flex',
        justifyContent:'space-beetween',
        width:450,
    }

}));
function Home():React.ReactElement {
    const isLoading=useSelector(selectIsLoading);
    const classes=useHomeStyles();
   
    const  dispatch = useDispatch();
    const tweets=useSelector(selectTweetsItems);
    useEffect(()=>{
    dispatch(fetchTweets());
    dispatch(fetchTagss());
    },[dispatch]);
 
    return (
            <Container className={classes.wrapper} maxWidth="lg">
    <Grid container className={classes.contain} spacing={3}>
      <Grid item sm={1} md={3} >
          <SideBar classes={classes}/>
        </Grid>
        <Grid item xs={8} md={6}>
                <Paper className={classes.tweetsWrapper}  variant="outlined">
                <Paper variant="outlined" className={classNames(classes.tweetsHeader,classes.tweet)} >
                    <Route path='/home/:any'>
                        <BackButton/>
                    </Route>

                    <Route  path="/home/tweet" exact >
                  <Typography variant="h6">Твитнуть</Typography>

                    </Route>
              <Route path={['/home','/home/search']} exact >
                  <Typography variant="h6">Твиты</Typography>

              <Paper>
                 <AddTwit maxRows={10} classes={classes}/>
              </Paper>

              </Route>
              </Paper>

              <Route exact path="/home">
              {isLoading?<CircularProgress/>:tweets.map((tweet:any)=>(
                     <Tweets {...tweet} classes={classes} key={tweet._id} />
                 ))}


              </Route>
              <Route exact path="/home/tweet/:id" component={FullTweet}/>     
                
              </Paper>


        </Grid>
      <Grid item sm={3} md={3}>
          <div>
           <SearchTextField
           variant="outlined"
           placeholder="Поиск по твиттеру"
           InputProps={{
               startAdornment:(
                   <InputAdornment position="start">
                       <Search/>
                   </InputAdornment>
               )
           }}
            fullWidth
        />
        <Tags classes={classes} />
        </div>
        </Grid>

    </Grid>
       </Container>
    )
};

export default Home;
