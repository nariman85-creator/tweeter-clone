import { Tweet } from "../state";

export enum LoadingState{
 LOADED='LOADED',
 ERROR='ERROR',
 NEVER='NEVER',
 LOADING='LOADING'
};


export interface TweetDataState{
 data?:Tweet;
 loadingState:LoadingState;
};