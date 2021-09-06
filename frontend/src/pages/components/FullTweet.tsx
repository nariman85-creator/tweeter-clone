import { CircularProgress } from '@material-ui/core';
import React, {  useEffect } from 'react';
import format from "date-fns/format";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Tweets } from '../../components/Tweets';
import { fetchTweetData, setTweetDatas } from '../../store/ducks/tweet/actionCreators';
import { selectIsLoading, selectTweetData } from '../../store/ducks/tweet/selector';
import { useHomeStyles } from '../Home';

export const FullTweet:React.FC=(props):React.ReactElement | null=>{
 const classes=useHomeStyles();
 const  dispatch = useDispatch();
 const tweetData=useSelector(selectTweetData);
 const isLoading=useSelector(selectIsLoading);
const data=useSelector(state=>state);
 const params:{id?:string}=useParams();
 const id=params.id;
 useEffect(()=>{
  if(id){
   dispatch(fetchTweetData(id));
   return ()=>{
    dispatch(setTweetDatas(undefined));
   };

  }
 },[dispatch,id]);
 if(tweetData){
  return <Tweets classes={classes}  {...tweetData} />;

 };
 if(isLoading){
  return  <div className="">
  <CircularProgress/>
 </div>;

 }
return null;

}