import  TextField  from '@material-ui/core/TextField';
import { createStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core/styles';
import React from 'react';
export const SearchTextField= withStyles((theme:Theme)=>{
 createStyles({
     root:{
       '& .MuiOutlinedInput':{
           borderRadius:30,
           backgroundColor:'#e6ecf0',
           padding:0,
           paddingLeft:15,
           '&.Mui-focused':{
               backgroundColor:'#fff',
               '& fieldset':{borderWidth:1,borderColor:theme.palette.primary},
               '& svg path':{
                   fill:theme.palette.primary.main,
               },
           },
           '&:hover':{
               '& fieldset':{borderColor:'transparent'},
           },
           '& fieldset':{
               borderColor:'transparent',
               borderWidth:1,
           },
       },
       '& .MuiOutlineInput-input':{
        padding:'12px 14px 14px 5px',
       }
     },
 })
})(TextField);
