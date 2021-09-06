import React,{useEffect, useState} from 'react';
import {useHomeStyles} from '../pages/Home';

import Avatar from '@material-ui/core/Avatar'; 
import IconButton from '@material-ui/core/IconButton'; 
import  Snackbar  from '@material-ui/core/Snackbar';

import TextareaAutosize from '@material-ui/core/TextareaAutosize'; 
import CircularProgress from '@material-ui/core/CircularProgress'; 
import Button from '@material-ui/core/Button'; 
import EmojiEmotionsOutlined from '@material-ui/icons/EmojiEmotionsOutlined';
import ImageOutlined from '@material-ui/icons/ImageOutlined';
import { useDispatch, useSelector } from 'react-redux';
import {  fetchAddTweet } from '../store/ducks/tweets/actionCreators';
import { selectAddFormState } from '../store/ducks/tweets/selector';
import { AddFormState } from '../store/ducks/state';


interface AddTwitProps{
    classes:ReturnType<typeof useHomeStyles>;
    maxRows:number;
};

export const AddTwit:React.FC<AddTwitProps> = ({classes,maxRows}:AddTwitProps):React.ReactElement => {
    const dispatch =useDispatch();
    const [visibleNotification,setVisibleNotification]=useState<boolean>(false);
    const addFormState=useSelector(selectAddFormState);
     const [text,setText]=useState<string>('');
     const textLimitProcent=Math.round((text.length/280)*100);
     useEffect(()=>{
         if(addFormState===AddFormState.ERROR){
             setVisibleNotification(true);
         }
     },[addFormState])
     const handleChangeTextarea=(e:React.FormEvent<HTMLTextAreaElement>)=>{
          if(e.currentTarget&& textLimitProcent<=100){
              setText(e.currentTarget.value);
          }
     };
     const handleAddTweet=():void=>{
         dispatch(fetchAddTweet(text))
         setText('');
     };
     const handleCloseNotification=()=>{
         setVisibleNotification(false);
     }

    return (
                 <div className=''>
                     <Snackbar
                     open={visibleNotification}
                     onClose={handleCloseNotification}
                     message="Ошибка при добавлении твита"
                     anchorOrigin={{vertical:"top",horizontal:"right"}}

                     />
                      <div>
                          <Avatar className={classes.tweetAvatar}/>
                          <TextareaAutosize 
                          onChange={handleChangeTextarea}
                          value={text}
                          placeholder="Chto proishodit"
                          rowsMax={maxRows}/>
                          
                      </div>
                      <div>
                          <div>
                              <IconButton color="primary">
                                  <ImageOutlined style={{fontSize:26}}/>
                              </IconButton>
                              <IconButton>
                                  <EmojiEmotionsOutlined style={{fontSize:26}}/>
                              </IconButton>
                          </div>
                          <div>
                                  {text &&(
                                      <>
                                                                                                   <span>{text.length}</span> 
                                                                                                   <div>
            <CircularProgress 
            variant='static' 
            size={textLimitProcent}
            value={textLimitProcent>100?100:textLimitProcent}
             style={textLimitProcent>=100?{color:"red"}:undefined}/>
             <CircularProgress style={{color:'rgba(0,0,0,.1)'}}
                                variant='static' size={20}
                                        thickness={4}
                            value={100}
                                 />
                                                                        </div>)
                                                                        </>
                                                                        
)                                      
                                  }
                                  </div>
                              
                              <Button onClick={handleAddTweet} disabled={!text || text.length>=100} color="primary" variant="contained" >
                                  {addFormState===AddFormState.LOADING?<CircularProgress size={16} color="inherit"/>:"Твитнуть"}
                              </Button>
                          </div>
                      </div>

    )
}
