import {call, put, takeEvery} from 'redux-saga/effects';
import { TweetsApi } from '../../../services/api/tweetApi';
import { Tweet } from '../state';
import { setTweetDataLoadingState, setTweetDatas } from './actionCreators';
import { FetchTweetDatasActionInterface, TweetDataActionType } from './actionTypes';
import { LoadingState } from './state';






export function* fetchTweetRequest({peyload:tweetId}:FetchTweetDatasActionInterface){
try{
 const data:Tweet=yield call(TweetsApi.fetchTweetData,tweetId);
yield put(setTweetDatas(data));
}catch(e){
yield put(setTweetDataLoadingState(LoadingState.ERROR));
}
};


export function* tweetSaga(){
 yield takeEvery(TweetDataActionType.FETCH_DATA,fetchTweetRequest);
};