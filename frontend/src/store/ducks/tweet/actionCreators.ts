import { type } from "node:os";
import { Action } from "redux";
import { FetchTweetDatasActionInterface, SetTweetDataActionInterface, SetTweetDataLoadingStateActionInterface,  TweetDataActionType } from "./actionTypes";
import {  LoadingState, TweetDataState} from "./state";

export const fetchTweetData=(peyload:string):FetchTweetDatasActionInterface =>({
 type:TweetDataActionType.FETCH_DATA,
 peyload
});

export const setTweetDatas=(peyload:TweetDataState['data']):SetTweetDataActionInterface =>({
 type:TweetDataActionType.SET_DATA,
 peyload,
});
export const setTweetDataLoadingState=(peyload:LoadingState):SetTweetDataLoadingStateActionInterface=>({
 type:TweetDataActionType.SET_LOADING_STATE,
 peyload,
});
export type TweetDataAction=SetTweetDataActionInterface | FetchTweetDatasActionInterface |SetTweetDataLoadingStateActionInterface;
