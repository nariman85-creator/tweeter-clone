import produce, { Draft } from 'immer';
import { TweetState,LoadingState, AddFormState } from '../state';
import { TweetAction, TweetActionType } from './actionTypes';



const initialTweetState:TweetState={
 items:[],
 addFormState:AddFormState.NEVER,
 loadingState:LoadingState.NEVER,
};

export const tweetsReducer=produce((draft:Draft<TweetState>,action:TweetAction)=>{
 const {type,peyload}=action;
 switch(type){
   case TweetActionType.SET_TWEETS:
    draft.items=peyload;
    draft.loadingState=LoadingState.LOADED;
    break;
    case TweetActionType.FETCH_TWEETS:
      draft.items=[];
      draft.loadingState=LoadingState.LOADING;
      break;
      case TweetActionType.FETCH_ADD_TWEET:
        draft.addFormState=AddFormState.LOADING;
        break;

      case TweetActionType.ADD_TWEET:
        draft.items.splice(0,0,action.peyload);
        draft.addFormState=AddFormState.NEVER;
        break;
        case TweetActionType.SET_ADD_FORM_STATE:
          draft.addFormState=action.peyload;
          break;

  
    
    
  case TweetActionType.SET_LOADING_STATE:
  draft.loadingState=action.peyload;
  break;
 }


},initialTweetState);