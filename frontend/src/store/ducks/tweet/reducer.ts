import produce, { Draft } from 'immer';
import { TweetDataState,LoadingState } from './state';
import { TweetData, TweetDataActionType } from './actionTypes';




const initialTweetState:TweetDataState={
 data:undefined,
 loadingState:LoadingState.NEVER,
};

export const tweetReducer=produce((draft:Draft<TweetDataState>,action:TweetData)=>{
 switch(action.type){
   case TweetDataActionType.SET_DATA:
    draft.data=action.peyload;
    draft.loadingState=LoadingState.LOADED;
    break;
    case TweetDataActionType.FETCH_DATA:
      draft.data=undefined;
      draft.loadingState=LoadingState.LOADING;
      break;
    
  case TweetDataActionType.SET_LOADING_STATE:
  draft.loadingState=action.peyload;
  break;
  default:
    break;
 }


},initialTweetState);