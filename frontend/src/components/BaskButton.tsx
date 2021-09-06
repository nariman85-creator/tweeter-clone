import  IconButton  from '@material-ui/core/IconButton';
import  ArrowBack  from '@material-ui/icons/ArrowBack';
import React from 'react';
import { useHistory } from 'react-router';




export const BackButton:React.FC=():React.ReactElement=>{
 const history=useHistory();
 const handleClickButton=()=>{
  history.goBack();
 }
 return(
  <IconButton onClick={handleClickButton} style={{marginRight:20}} color="primary">
   <ArrowBack/>
  </IconButton>
 );
}