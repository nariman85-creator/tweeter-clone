import { createSelector } from "reselect";
import { RootState } from "../../store";
import { AddFormState, LoadingState, TweetState } from "../state";
 export const selectTweets=(state:RootState):TweetState=>state.tweets;
export const selectTweetsItems=(state:RootState)=>selectTweets(state).items;
export const selectIsLoading=(state:RootState):boolean=>selectTweets(state).loadingState===LoadingState.LOADING;
export const selectIsLoaded=(state:RootState):boolean=>selectTweets(state).loadingState===LoadingState.LOADED;

export const selectLoadingState=(state:RootState):LoadingState=>selectTweets(state).loadingState;
export const selectAddFormState=(state:RootState):AddFormState=>selectTweets(state).addFormState;