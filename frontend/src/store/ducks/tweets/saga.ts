import {call, put, takeEvery} from 'redux-saga/effects';
import { TweetsApi } from '../../../services/api/tweetApi';
import { AddFormState, LoadingState, Tweet} from '../state';

import {TweetActionType,FetchAddTweetActionInterface} from './actionTypes';
import { addTweet, setAddFormState, setTweetLoadingState, setTweets,  } from './actionCreators';




export function* fetchTweetsRequest(){
try{
 const data:Tweet[]=yield call(TweetsApi.fetchTweets);
yield put(setTweets(data));
}catch(e){
yield put(setTweetLoadingState(LoadingState.ERROR));
}
};
export function* fetchAddTweetRequest({peyload}:FetchAddTweetActionInterface){
 try{
  const items={
   _id:Math.random().toString(34).substr(4),
   text:peyload,
   user:{
    fullname:"Test",
    username:"text",
    avatarUrl:"http://fake"
   },
  }
  const data:Tweet=yield call(TweetsApi.fetchAddTweet,items);
 yield put(addTweet(data));
 console.log(addTweet(data));
 }catch(e){
 yield put(setAddFormState(AddFormState.ERROR));
 }
 };
 
export function* watchIncrementAsync(){
 yield takeEvery(TweetActionType.FETCH_TWEETS,fetchTweetsRequest);
 yield takeEvery(TweetActionType.FETCH_ADD_TWEET,fetchAddTweetRequest)
};