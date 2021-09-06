import { Action } from "redux";
import { LoadingState, TweetDataState} from "./state";

export enum TweetDataActionType{
 SET_DATA='tweet/SET_DATA',
 FETCH_DATA='tweet/FETCH_DATA',
 SET_LOADING_STATE='tweet/SET_LOADING_STATE',
 
};
export interface SetTweetDataLoadingStateActionInterface{
 type:TweetDataActionType.SET_LOADING_STATE;
 peyload:LoadingState;

};


export interface SetTweetDataActionInterface extends Action<TweetDataActionType>{
 type:TweetDataActionType.SET_DATA;
 peyload:TweetDataState['data'];
};
export interface FetchTweetDatasActionInterface extends Action<TweetDataActionType>{
type:TweetDataActionType.FETCH_DATA;
peyload:string;
};
export type TweetData=SetTweetDataLoadingStateActionInterface |SetTweetDataActionInterface|FetchTweetDatasActionInterface;