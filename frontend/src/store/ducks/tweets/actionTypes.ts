import { type } from "node:os";
import { Action } from "redux";
import {  AddFormState, LoadingState, Tweet, TweetState } from "../state";

export enum TweetActionType{
 SET_TWEETS='tweets/SET_TWEETS',
 FETCH_TWEETS='tweets/FETCH_TWEETS',
 SET_LOADING_STATE='tweets/SET_LOADING_STATE',
 FETCH_ADD_TWEET='tweets/FETCH_ADD_TWEET',
 ADD_TWEET='tweets/ADD_TWEET',
 SET_ADD_FORM_STATE="tweets/SET_ADD_FORM_STATE",
 
};
export interface SetTweetsLoadingStateActionInterface{
 type:TweetActionType.SET_LOADING_STATE;
 peyload:LoadingState;

};
export interface FetchAddTweetActionInterface extends Action<TweetActionType>{
 type:TweetActionType.FETCH_ADD_TWEET;
 peyload:string;

};
export interface AddTweetActionInterface extends Action<TweetActionType>{
type:TweetActionType.ADD_TWEET;
peyload:Tweet;
};
export interface SetAddFormStateActionInterface extends Action<TweetActionType>{
 type:TweetActionType.SET_ADD_FORM_STATE,
 peyload:AddFormState,
}

export interface SetTweetsActionInterface extends Action<TweetActionType>{
 type:TweetActionType.SET_TWEETS;
 peyload:TweetState['items'];
};
export interface FetchTweetsActionInterface extends Action<TweetActionType>{
type:TweetActionType.FETCH_TWEETS
peyload?:any
};
export type TweetAction=SetTweetsActionInterface | FetchTweetsActionInterface |SetTweetsLoadingStateActionInterface |FetchAddTweetActionInterface|AddTweetActionInterface|SetAddFormStateActionInterface;
