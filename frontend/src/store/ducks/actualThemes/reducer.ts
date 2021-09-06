import produce, { Draft } from 'immer';
import { TagsState,LoadingState } from './state';
import { TagsAction, TagsActionType } from './actionCreators';



const initialTagsState:TagsState={
 items:[],
 loadingState:LoadingState.NEVER,
};

export const tagsReducer=produce((draft:Draft<TagsState>,action:TagsAction)=>{
 const {type,peyload}=action;
 switch(type){
   case TagsActionType.SET_ITEMS:
    draft.items=peyload;
    draft.loadingState=LoadingState.LOADED;
    break;
    case TagsActionType.FETCH_ITEMS:
      draft.items=[];
      draft.loadingState=LoadingState.LOADING;
      break;
    
  case TagsActionType.SET_LOADING_STATE:
  draft.loadingState=action.peyload;
  break;
 }


},initialTagsState);