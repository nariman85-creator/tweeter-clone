import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ChatBubble from '@material-ui/icons/ChatBubble';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import  Button from '@material-ui/core/Button';
import {RegisterModal} from "./components/signin/components/RegisterModal";
import {LoginModal} from "./components/signin/components/LoginModal";


export const useStylesSignIn=makeStyles((theme)=>({
    wrapper:{
        display:'flex',
        height:'100vh',
    },
    blueSide:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#71c9f8',
        flex:'0 0 50%',
        position:'relative',
        overflow:'hidden',

    },
    blueSideBigIcon:{
      position:'absolute',
      left:'50%',
      top:'70%',
      transform:'translate(-50%,-50%)',
      width:'350%',
      height:'300%',
    },
    blueSideListInfo:{
        position:'relative',
        listStyle:'none',
        padding:0,
        margin:0,
        width:380,
        
        '& h5':{
            display:'flex',
            alignItems:'center',
            color:'white',
            fontWeight:400,
            fontSize:20,
        },
    },
    blueSideListInfoIcon:{
        fontSize:24,
        marginRight:15,
    },
    blueSideListInfoItem:{
        marginBottom:40,
    },
    loginSide:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
     flex:'0 0 50%',
     overflow:'hidden',

    },
    loginSideTwitterIcon:{
        fontSize:45,
    },
    loginSideWrapper:{
        width:380,
    },
    loginSideTitle:{
        fontWeight:800,
        fontSize:32,
        marginBottom:45,
        marginTop:20,
    },
    loginSideField:{
        marginBottom:18,
    },
    registerSideField:{
                marginBottom:25,

    },
    registerFormControll:{
        marginBottom:12,
    }
}));

function SignIn() {
        const classes=useStylesSignIn();
            const [visibleModal,setVisibleModal]=React.useState<'signIn'|'signUp'>();

    const handleClickSignIn=():void=>{
        setVisibleModal('signIn');
    };
        const handleClickSignUp=():void=>{
        setVisibleModal('signUp');
    };

    const handleClickClose=():void=>{
        setVisibleModal(undefined);
    };


    return (
        <div className={classes.wrapper}>
          <section className={classes.blueSide}>
                <TwitterIcon color="primary" className={classes.blueSideBigIcon}/>

              <ul className={classes.blueSideListInfo}>
                  <li className={classes.blueSideListInfoItem}><Typography variant="h5"> <SearchIcon className={classes.blueSideListInfoIcon}/>Читайте о том,что интересно</Typography></li>
                  <li className={classes.blueSideListInfoItem}><Typography variant="h5"><PeopleOutlineIcon className={classes.blueSideListInfoIcon}/>Узнайте,о чет говорять в мире</Typography></li>
                  <li className={classes.blueSideListInfoItem}><Typography variant="h5"> <ChatBubble className={classes.blueSideListInfoIcon}/>Читайте о том, что вам интересно</Typography>
                  </li>
              </ul>
          </section>
          <section className={classes.loginSide}>
              <div className={classes.loginSideWrapper}>
                                <TwitterIcon color="primary" className={classes.loginSideTwitterIcon}/>
              <Typography className={classes.loginSideTitle} variant="h4" >Узнайте,что происходит в мире прямо сейчас</Typography>
              <Typography><b>Присоединяйтесь к Твиттеру прямо сейчас</b></Typography>
              <br/>
              <Button style={{marginBottom:20}}
              onClick={handleClickSignUp}
               variant="contained" color="primary" fullWidth>
                   Зарегестрируйтесь</Button>
              <Button variant="outlined" color="primary" onClick={handleClickSignIn} fullWidth> Войти</Button>
           <RegisterModal/>
                  <LoginModal/>
              </div>
          </section>
        </div>
    )
}

export default SignIn;
